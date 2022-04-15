import PostController from "../src/modules/post/controller/posts.js";

const handlePostRequest = async (req, callback) => {
  console.log("----------------", req.path, "----------------");

  const postController = new PostController();
  let results;
  switch (req.path) {
    case "/questions/:questionId":
      results = await postController.fetchQuestionDetails(req.body);
      break;
  }

  callback(null, results);
};

export default handlePostRequest;
