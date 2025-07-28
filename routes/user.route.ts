import { Router } from "express";
import getUsers, {
  deleteUser,
  createUser,
  updateUser,
} from "../controller/user.controller";
const router = Router();

router
  .get("/", getUsers)
  .post("/", createUser)
  .patch("/", updateUser)
  .delete("/", deleteUser);

export default router;
