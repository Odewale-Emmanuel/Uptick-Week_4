import { Router } from "express";
import noteController from "../controller/note.controller";
const router = Router();

router
  .get("/", noteController)
  .post("/", noteController)
  .patch("/", noteController)
  .delete("/", noteController);

export default router;
