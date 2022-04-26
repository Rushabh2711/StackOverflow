import express from "express";
import PostController from "../controller/posts.js";

const postRouter = express.Router();

const postController = new PostController();

postRouter.post("/questions/ask", postController.create);
postRouter.get("/questions", postController.getAllQuestions);
postRouter.get("/questions/:questionId", postController.fetchQuestionDetails);
postRouter.get("/user/questions", postController.getQuestionsAskedByUser);

export default postRouter;
