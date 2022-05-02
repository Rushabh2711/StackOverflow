import client from "../../../db/config/redis.config.js";
import Questions from "../../../db/models/mongo/question.js";
import QuestionViews from "../../../db/models/mongo/questionViews.js";
import UserDetails from "../../../db/models/mongo/userDetails.js";
import moment from "moment";

class QuestionController {
  responseGenerator = (statusCode, message) => ({
    status: statusCode,
    response: message,
  });

  fetchAllQuestions = async () => {
    let results = [];

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
          addedAt: question.addedAt,
        })
      );

      return this.responseGenerator(200, results);
    } catch (err) {
      console.error(err);
      return this.responseGenerator(
        404,
        "Error when fetching question details"
      );
    }
  }

  fetch10kQuestions = async () => {
    try {
      let questions = await Questions.find({},{ answers: 0, questionComments: 0, Activity: 0 });
      client.set("test-questions", JSON.stringify(questions));
      return this.responseGenerator(200, questions);
    } catch (err) {
      console.error(err);
      return this.responseGenerator(
        404,
        "Error when fetching question details"
      );
    }
  }

  fetchQuestionDetails = async (data) => {
    console.log(data);
    const questionId = data.questionId;
    try {
      const questionDetails = await Questions.findById({ _id: questionId });
      console.log("questionDetails",questionDetails);
      const questionViews = await QuestionViews.find({
        questionId: questionId,
      });
      console.log(JSON.stringify(questionDetails));
      const result = {
        questionId: questionDetails._id,
        questionTitle: questionDetails.title,
        views: questionViews[0].views,
        description: questionDetails.description,
        createdTime: questionDetails.addedAt,
        modifiedTime: questionDetails.modifiedTime,
        tags: questionDetails.tags,
        upvotes: questionDetails.upvotes,
        downvotes: questionDetails.downvotes,
        numberOfAnswers: questionDetails.numberOfAnswers,
        answers: questionDetails.answers,
        questionComments: questionDetails.questionComments,
        //user details
      };
      return this.responseGenerator(200, result);
    } catch (err) {
      console.error("Error when fetching question details ", err);
      return this.responseGenerator(
        404,
        "Error when fetching question details"
      );
    }
  };

  addView = async (data) => {
    console.log(data);
    const questionId = data.questionId;
    console.log("qid",questionId);
    const date = moment().format("MM-DD-YYYY");
    try {
      const result = await Questions.updateOne(
        { _id: questionId },
        { $inc: { views: 1 } }
      );
      console.log(result);

      const res = await QuestionViews.updateOne(
        { questionId: questionId, date: date },
        {
          $set: {
            questionId: questionId,
            date: date,
          },
          $inc: { views: 1 },
        },
        { upsert: true }
      );
      console.log(res);
      return this.responseGenerator(200, res);
    } catch (err) {
      console.error("Error when adding view count to question view ", err);
    }
  };

  postAnswer = async (data) => {
    console.log(data);
    const questionId = data.questionId;
    const time = new Date();

    const answer = {
      userId: data.userId,
      description: data.description,
      createdTime: time.toISOString(),
      modifiedTime: time.toISOString(),
    };

    try {
      const response = await Questions.findByIdAndUpdate(questionId, {
        $push: { answers: answer },
      }, {new: true});

      console.log(JSON.stringify(response));
      
      let count = response.answers.length;
      let answerId = response.answers[count-1]._id;
      let pair = {
        questionId: questionId,
        answerId: answerId
      }
      await UserDetails.findByIdAndUpdate(data.userId,{
        $push : {questionsAnswered : pair }
      })
      return this.responseGenerator(200, "Added new answer to question");
    } catch (err) {
      console.error("Error when posting answer ", err);
    }
  };

  postCommentToAnswer = async (data) => {
    const questionId = data.questionId;
    const time = new Date();

    const comment = {
      userId: data.userId,
      description: data.description,
      postedOn: time.toISOString(),
    };

    try {
      const comments = await Questions.findOneAndUpdate(
        {
          _id: questionId,
          'answers._id': data.answerId,
        },
        {
          $push: { 'answers.$.comments': comment },
        },
        {
          upsert: true
        }
      );
      console.log(JSON.stringify(comments));
      return this.responseGenerator(200, "Added new comment to answer");
    } catch (err) {
      console.error("Error when posting comment to answer ", err);
    }
  };
}

export default QuestionController;
