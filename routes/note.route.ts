import { Router } from "express";
import getNotes, { deleteNote } from "../controller/note.controller";
const router = Router();

router
  .get("/", getNotes)
  .post("/", getNotes)
  .patch("/", getNotes)
  .delete("/", deleteNote);

export default router;
