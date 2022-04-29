import express from "express";
import QuestionController from "../controller/questions.js";

const questionRouter = express.Router();

const questionController = new QuestionController();

questionRouter.post("/questions/ask", questionController.postQuestion);
questionRouter.get("/questions", questionController.fetchAllQuestions);
questionRouter.post("/question/addView", questionController.addView);
questionRouter.post("/question/bookmark", questionController.bookmark);
questionRouter.post("/question/unbookmark", questionController.removeBookmark);
questionRouter.put("/votePost", questionController.votePost);
questionRouter.put("/question/postAnswer", questionController.postAnswer);
questionRouter.put("/question/postComment", questionController.postComment);

questionRouter.get(
  "/questions/:questionId",
  questionController.fetchQuestionDetails
);
questionRouter.get(
  "/user/questions/:userId",
  questionController.getQuestionsAskedByUser
);

export default questionRouter;
