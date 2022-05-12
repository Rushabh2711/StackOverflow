import express from "express";
import { UserController } from "../controller/users.js";

const userRouter = express.Router();
const userController = new UserController();

userRouter.post("/user/login", userController.login);
userRouter.post("/user/signup", userController.signup);
userRouter.get("/user/:userId", userController.getuser);
userRouter.put("/user/question/bookmark", userController.bookmarkQuestion);
userRouter.put("/user/question/removebookmark", userController.removeBookmarkQuestion);



export default userRouter;
