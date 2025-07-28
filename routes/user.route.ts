import { Router } from "express";
import getUsers, { deleteUser } from "../controller/user.controller";
const router = Router();

router
  .get("/", getUsers)
  .post("/", getUsers)
  .patch("/", getUsers)
  .delete("/", deleteUser);

export default router;
