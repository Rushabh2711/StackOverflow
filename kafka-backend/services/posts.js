import QuestionController from "../src/modules/question/controller/questions.js";

const handleQuestionRequest = async (req, callback) => {
  console.log("----------------", req.path, "----------------");

  const questionController = new QuestionController();
  let results;
  switch (req.path) {
    case "/questions/:questionId":
      results = await questionController.fetchQuestionDetails(req.body);
      break;
  }

  callback(null, results);
};

export default handleQuestionRequest;
