import { make_request } from "../../../../kafka/client.js";
import Questions from "../../../db/models/mongo/question.js";
import Posts from "../../../db/models/mongo/posts.js";

class QuestionController {
  checkHealth = async (req, res) => {
    res.status(200).send("Up and Running");
  };

  // postQuestion = async (req, res) => {
  //   console.log("Add question");
  //   let time = new Date();

  //   try {
  //     const newQuestion = new Questions({
  //       title: req.body.title,
  //       tags: req.body.tags,
  //       description: req.body.description,
  //       addedAt: time.toISOString(),
  //       modifiedTime: time.toISOString(),
  //       userId: req.body.userId,
  //       username: req.body.username,
  //     });
  //     const response = await newQuestion.save();
  //     res.status(200).send(response);
  //   } catch (err) {
  //     console.error(err);
  //     res.status(400).send(err);
  //   }
  // };

  postQuestion = async (req, res) => {
    console.log("Add question");
    let time = new Date();
    try {
      const newQuestion = new Posts({
        title: req.body.title,
        postType: "question",
        tags: req.body.tags,
        description: req.body.description,
        addedAt: time.toISOString(),
        modifiedAt: time.toISOString(),
        status: "APPROVED",
        userId: req.body.userId,
      });
      const response = await newQuestion.save();
      res.status(200).send(response);
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  };

  addView = async (req, res) => {
    console.log("Inside question controller, about to make Kafka request");
    const message = {};
    message.body = req.body;
    message.path = req.route.path;
    make_request("question", message, (err, results) => {
      if (err) {
        console.error(err);
        res.json({
          status: "Error",
          msg: "System error, try again",
        });
      } else {
        console.log("Added view to question with kafka-backend");
        console.log(results);
        res.json(results);
        res.end();
      }
    });
  };

  fetchAllQuestions = async (req, res) => {
    console.log("Inside question controller, about to make Kafka request");
    const message = {};
    message.path = req.route.path;
    make_request("question", message, (err, results) => {
      if (err) {
        console.error(err);
        res.json({
          status: "Error",
          msg: "System error, try again",
        });
      } else {
        console.log("Fetch all questions with kafka-backend");
        console.log(results);
        res.json(results);
        res.end();
      }
    });
  };

  fetchQuestionDetails = async (req, res) => {
    console.log("Inside question controller, about to make Kafka request");
    const message = {};
    message.body = req.params;
    message.path = req.route.path;
    make_request("question", message, (err, results) => {
      if (err) {
        console.error(err);
        res.json({
          status: "Error",
          msg: "System error, try again",
        });
      } else {
        console.log("Fetched question details with kafka-backend");
        console.log(results);
        res.json(results);
        res.end();
      }
    });
  };

  getQuestionsAskedByUser = async (req, res) => {
    const { userId } = req.params;
    try {
      const response = await Questions.find({ userId: userId });
      res.status(200).send(response);
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  };

  bookmark = async (req, res) => {};

  removeBookmark = async (req, res) => {};

  votePost = async (req, res) => {
    //Get user id who posted answer
    const { voteType, postType, questionId } = req.body;
    let response;

    try {
      if (postType == "Question") {
        const filter = { _id: questionId };
        const update =
          voteType == "Upvote"
            ? { $inc: { upvotes: 1 } }
            : { $inc: { downvotes: 1 } };

        response = await Questions.findOneAndUpdate(filter, update);
      }

      if (postType == "Answer") {
        //update user activity
        const _id = req.body.answerId;
        const update =
          voteType == "Upvote"
            ? { $inc: { "answers.$[a].upvotes": 1 } }
            : { $dec: { "answers.$[a].downvotes": 1 } };

        response = await Questions.findOneAndUpdate(
          { _id: questionId },
          update,
          { arrayFilters: [{ "a._id": _id }] }
        );
      }
      res.status(200).send(response);
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  };

  postAnswer = async (req, res) => {
    console.log("Inside question controller, about to make Kafka request");
    const message = {};
    message.body = req.body;
    message.path = req.route.path;
    make_request("question", message, (err, results) => {
      if (err) {
        console.error(err);
        res.json({
          status: "Error",
          msg: "System error, try again",
        });
      } else {
        console.log("Post answer with kafka-backend");
        console.log(results);
        res.json(results);
        res.end();
      }
    });
  };

  postCommentToQuestion = async (req, res) => {
    const { questionId, description, userId } = req.params;
    let time = new Date();

    const comment = {
      description: description,
      userId: userId,
      postedOn: time.toISOString(),
    };

    try {
      const response = await Questions.findByIdAndUpdate(questionId, {
        $push: { questionComments: comment },
      });
      res.status(200).send(response);
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  };

  postCommentToAnswer = async (req, res) => {
    console.log("Inside question controller, about to make Kafka request");
    const message = {};
    message.body = req.body;
    message.path = req.route.path;
    make_request("question", message, (err, results) => {
      if (err) {
        console.error(err);
        res.json({
          status: "Error",
          msg: "System error, try again",
        });
      } else {
        console.log("Fetched question details with kafka-backend");
        console.log(results);
        res.json(results);
        res.end();
      }
    });
  };
}

export default QuestionController;
