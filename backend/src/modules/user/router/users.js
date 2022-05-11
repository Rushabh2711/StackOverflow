import express from "express";
import { UserController } from "../controller/users.js";

const userRouter = express.Router();
const userController = new UserController();

userRouter.post("/user/login", userController.login);
userRouter.post("/user/signup", userController.signup);
userRouter.get("/user/:userId", userController.getuser);

export default userRouter;
