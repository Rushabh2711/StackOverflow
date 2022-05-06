import express from "express";
import {UserController} from "../controller/users.js";

const userRouter = express.Router();
const userController = new UserController();

userRouter.post("/user/login", userController.login);
userRouter.post("/user/signup", userController.signup);
userRouter.post("/user/getuser", userController.getuser);
userRouter.get("/user/getQuestionsAnswered", userController.getQuestionsAnswered);


export default userRouter;

