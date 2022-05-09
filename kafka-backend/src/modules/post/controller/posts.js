// import client from "../../../db/config/redis.config.js";
import Posts from "../../../db/models/mongo/posts.js";
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
      let questions = await Posts.find({postType: "question"});

      questions.map((question) =>
        results.push({
          questionId: question._id,
          questionTitle: question.questionTitle,
          tags: question.questionTags,
          votes: question.votes,
          numberOfAnswers: question.numberOfAnswers,
          views: question.views,
          userId: question.userId,
          // username: question.username,
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
      let questions = await Posts.find({postType: "question"});
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
      const questionDetails = await Posts.findById({ _id: questionId });
      console.log("questionDetails",questionDetails);
      const questionViews = await QuestionViews.find({
        questionId: questionId,
      });
      console.log("questions",JSON.stringify(questionViews));

      const userDetails = UserDetails.find({_id : data.userId});
      const result = {
        questionId: questionDetails._id,
        questionTitle: questionDetails.questionTitle,
        views: questionViews.length ?? questionViews[0].views,
        description: questionDetails.description,
        createdTime: questionDetails.addedAt,
        modifiedTime: questionDetails.modifiedTime,
        tags: questionDetails.questionTags,
        votes: questionDetails.votes,
        comments: questionDetails.comments,
        numberOfAnswers: questionDetails.numberOfAnswers,
        answers: questionDetails.answers,
        questionComments: questionDetails.questionComments,
        username: userDetails.username,
        profilePicture: userDetails.profilePicture,
        badges: userDetails.badges,
        userId: questionDetails.userId,
        reputation: userDetails.reputation
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
    console.log("Add answer");
    let time = new Date();
    try {
      const newPost = new Posts({
        questionTitle: data.questionTitle,
        postType: "answer",
        parentId: data.questionId,
        description: data.description,
        questionTags: data.questionTags,
        addedAt: time.toISOString(),
        modifiedAt: time.toISOString(),
        userId: data.userId,
      });
      const response = await newPost.save();
      return this.responseGenerator(200, response);
    } catch (err) {
      console.error("Error when posting answer ", err);
    }
  };

  postCommentToAnswer = async (data) => {
    const questionId = data.questionId;
    const time = new Date();

    const comment = {
      userId: data.userId,
      username: data.username,
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