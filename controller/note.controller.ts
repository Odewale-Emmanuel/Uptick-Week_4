import mongoose from "mongoose";
import noteModel from "../model/note";
mongoose.connect("mongodb://127.0.0.1:27017/note_db_app");
import { Response, Request } from "express";
// import seedNotes from "../seed/note";

async function getNotes(req: Request, res: Response) {
  try {
    // const notes = await seedNotes();
    // To initialize database with notes from users in the database
    const { user_id } = req.query;

    if (user_id) {
      try {
        const userNotes = await noteModel
          .find()
          .where("user_id")
          .equals(user_id);

        if (userNotes.length) {
          res.json(userNotes);
          console.log(userNotes.length);
        } else {
          res.send(`No note found for user: ${user_id}`);
        }
      } catch (error) {
        res
          .status(500)
          .send(
            `An error occured while getting the notes for user: ${user_id} please make sure you pass in a valid user id`
          );
        throw error;
      }

      return;
    }

    const notes = await noteModel.find();
    res.json(notes);
    console.log(notes.length);
  } catch (error: any) {
    console.log(
      `An error occured while getting all notes -->: ${error.message} `
    );
    throw error;
  }
}

async function deleteNote(req: Request, res: Response) {
  const noteId = req.body.id;
  console.log(noteId);
  try {
    const deletedNote = await noteModel.deleteOne().where("_id").equals(noteId);
    if (deletedNote.acknowledged && deletedNote.deletedCount >= 1) {
      res.send("Note deleted successfully");
    } else {
      res.send(`No Note found for the requested note id ${noteId}`);
    }
  } catch (error: any) {
    console.log(
      `An error occured while trying to delete note. ERROR-->: ${error.message} `
    );
    throw error;
  }
}

export { deleteNote };
export default getNotes;
