import mongoose from "mongoose";
import userModel from "../model/user";
import noteModel from "../model/note";
mongoose.connect("mongodb://127.0.0.1:27017/note_db_app");
import { Response, Request } from "express";
// import seedUsers from "../seed/user";

async function createUser(req: Request, res: Response) {
  const userName = req.body.name;
  const userEmail = req.body.email;

  try {
    await userModel.create({
      name: userName,
      email: userEmail.toLowerCase(),
    });
    res.send("user created successfully");
  } catch (error: any) {
    res
      .status(500)
      .send(
        `An error occured while trying to create new user. ERROR-->: ${error.message} `
      );
    throw error;
  }
}

async function getUsers(req: Request, res: Response) {
  try {
    // const users = await seedUsers();
    // To initialize database with a few users to start with
    const { user_id } = req.query;

    if (user_id) {
      try {
        const user = await userModel.findOne({
          _id: user_id,
        });

        if (user) {
          res.json(user);
        } else {
          res.send(`User width id: ${user_id} not found`);
        }
      } catch (error) {
        res
          .status(500)
          .send(
            `An error occured while trying to get requested user: ${user_id} information please make sure you pass in a valid user id`
          );
        throw error;
      }

      return;
    }

    const users = await userModel.find();
    res.json(users);
    console.log(users.length);
  } catch (error: any) {
    res
      .status(500)
      .send(`An error occured while getting all users -->: ${error.message} `);
    throw error;
  }
}

async function updateUser(req: Request, res: Response) {
  const userId = req.body.id;
  const userName = req.body.name;
  const userEmail = req.body.email;
  const updated_at = new Date();

  const foundUser = await userModel.findById({ _id: userId });
  if (!foundUser) {
    res.send("user not found please pass in a valid user id");
    return;
  }

  try {
    await userModel.findOneAndUpdate(
      { _id: userId },
      { name: userName, email: userEmail, updated_at: updated_at }
    );
    res.send("user updated successfully");
  } catch (error: any) {
    res
      .status(500)
      .send(
        `An error occured while trying to update user. ERROR-->: ${error.message} `
      );
    throw error;
  }
}

async function deleteUser(req: Request, res: Response) {
  const userId = req.body.id;

  try {
    const deletedUser = await userModel.deleteOne().where("_id").equals(userId);
    if (deletedUser.acknowledged && deletedUser.deletedCount >= 1) {
      await noteModel.deleteMany().where("user_id").equals(userId);
      res.send("User deleted successfully");
    } else {
      res.send("User not found");
    }
  } catch (error: any) {
    res
      .status(500)
      .send(
        `An error occured while trying to delete user. ERROR-->: ${error.message} `
      );
    throw error;
  }
}

export { deleteUser, updateUser, createUser };
export default getUsers;
