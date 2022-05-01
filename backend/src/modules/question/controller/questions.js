import { make_request } from "../../../../kafka/client.js";
import Questions from "../../../db/models/mongo/question.js";
import QuestionViews from "../../../db/models/mongo/questionViews.js";

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
      console.log(difference + " since question was posted");
      return difference;
    };

    try {
      let questions = Questions.find(
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
          numberOfViews: QuestionViews.findById({ questionId: question._id })
            .views,
          relativeTimePosted: computeTimeElapsed(question.addedAt),
        })
      );

      res.status(200).send(results);
    } catch (error) {
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
    // try {
    //   const response = await Post.find({
    //     ownerId: req.params.userId,
    //   });
    //   res.status(200).send({
    //     userPosts: response,
    //   });
    // } catch (err) {
    //   console.error(err);
    // }
  };

  bookmark = async (req, res) => {};

  removeBookmark = async (req, res) => {};

  postAnswer = async (req, res) => {};

  votePost = async (req, res) => {
    //type -> question/answer
    //downvote/upvote
  };

  postComment = async (req, res) => {};
}

export default QuestionController;
