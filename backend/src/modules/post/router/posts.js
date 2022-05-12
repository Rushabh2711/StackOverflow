import express from "express";
import QuestionController from "../controller/posts.js";

const questionRouter = express.Router();

const questionController = new QuestionController();

questionRouter.get("/checkHealth", questionController.checkHealth);
questionRouter.post("/questions/ask", questionController.postQuestion);
questionRouter.get("/questions", questionController.fetchAllQuestions);
questionRouter.post("/question/addView", questionController.addView);
questionRouter.put("/votePost", questionController.votePost);
questionRouter.put("/question/postAnswer", questionController.postAnswer);
questionRouter.put(
  "/question/postComment",
  questionController.postCommentToQuestion
);
questionRouter.put(
  "/answer/postComment",
  questionController.postCommentToAnswer
);
questionRouter.get(
  "/questions/:questionId",
  questionController.fetchQuestionDetails
);
questionRouter.get(
  "/questions/tags/:tagId",
  questionController.getQuestionsByTagId
);

questionRouter.get("/user/posts/:userId", questionController.getPostsByUser);
questionRouter.get(
  "/user/questions/:userId",
  questionController.getQuestionsAskedByUser
);
questionRouter.get(
  "/user/answersAnswered/:userId",
  questionController.getAnswersAnsweredByUser
);

questionRouter.get(
  "/user/questionsAnswered/:userId",
  questionController.getQuestionsAnswered
);

questionRouter.get(
  "/user/bookmarkedQuestions/:userId",
  questionController.getBookMarkedQuestionsforUser
);

questionRouter.put(
  "/question/markAnswerAccepted",
  questionController.markAnswerAsAccepted
);

export default questionRouter;
