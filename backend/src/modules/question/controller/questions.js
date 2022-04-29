import { make_request } from "../../../../kafka/client.js";
import Questions from "../../../db/models/mongo/question.js";

class QuestionController {
  postQuestion = async (req, res) => {
    console.log("Add question");
    let time = new Date();

    try {
      const newQuestion = new Questions({
        title: req.body.title,
        tags: req.body.tags,
        description: req.body.description,
        addedAt: time.toISOString(),
        modifiedTime: time.toISOString(),
        userId: req.body.userId,
        username: req.body.username,
      });
      const response = await newQuestion.save();
      res.status(200).send(response);
    } catch (err) {
      console.error(err);
    }
  };

  addView = async (req, res) => {
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
        console.log("Added view to question with kafka-backend");
        console.log(results);
        res.json(results);
        res.end();
      }
    });
  };

  fetchAllQuestions = async (req, res) => {
    let results = [];

    const computeTimeElapsed = (questionPostedDateString) => {
      const questionPostedDate = new Date(questionPostedDateString);
      const today = new Date();
      const difference = today.getTime() - questionPostedDate.getTime();
      let seconds = difference / 1000;
      let minutes = seconds / 60;
      let hours = minutes / 60;
      if (seconds < 60) {
        return Math.floor(seconds) + "s";
      } else if (minutes < 60) {
        return Math.floor(minutes) + "m";
      } else {
        return Math.floor(hours) + "h";
      }
    };

    try {
      let questions = await Questions.find(
        {},
        { answers: 0, questionComments: 0, Activity: 0 }
      );

      questions.map((question) =>
        results.push({
          questionId: question._id,
          questionTitle: question.title,
          tags: question.tags,
          upvotes: question.upvotes,
          numberOfAnswers: question.numberOfAnswers,
          views: question.views,
          userId: question.userId,
          username: question.username,
          relativeTimePosted: computeTimeElapsed(question.addedAt),
        })
      );

      res.status(200).send(results);
    } catch (err) {
      console.error(err);
    }
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
    }
  };

  bookmark = async (req, res) => {};

  removeBookmark = async (req, res) => {};

  votePost = async (req, res) => {
    //type -> question/answer
    //downvote/upvote
  };

  postAnswer = async (req, res) => {};

  postComment = async (req, res) => {};
}

export default QuestionController;
