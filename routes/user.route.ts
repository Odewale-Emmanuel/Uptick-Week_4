import { Router } from "express";
import userController from "../controller/user.controller";
const router = Router();

router
  .get("/", userController)
  .post("/", userController)
  .patch("/", userController)
  .delete("/", userController);

export default router;
