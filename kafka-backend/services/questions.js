import QuestionController from "../src/modules/question/controller/questions.js";

const handleQuestionRequest = async (req, callback) => {
  console.log("----------------", req.path, "----------------");

  const questionController = new QuestionController();
  let results;
  switch (req.path) {
    case "/questions/:questionId":
      results = await questionController.fetchQuestionDetails(req.body);
      break;
    case "/question/addView":
      results = await questionController.addView(req.body);
      break;
    case "/question/postAnswer":
      results = await questionController.postAnswer(req.body);
      break;
    case "/answer/postComment":
      results = await questionController.postCommentToAnswer(req.body);
      break;
  }

  callback(null, results);
};

export default handleQuestionRequest;
