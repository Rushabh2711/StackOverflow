// import client from "../../../db/config/redis.config.js";
import Posts from "../../../db/models/mongo/posts.js";
import QuestionViews from "../../../db/models/mongo/questionViews.js";
import UserDetails from "../../../db/models/mongo/userDetails.js";
import Votes from "../../../db/models/mongo/votes.js"
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

      const answers = await Posts.find({parentId : questionId});

      const userDetails = UserDetails.find({_id : data.userId});

      const questionVotes = Votes.find({_id : questionId});
      
      const result = {
        questionId: questionDetails._id,
        questionTitle: questionDetails.questionTitle,
        views: questionDetails.views,
        description: questionDetails.description,
        createdTime: questionDetails.addedAt,
        modifiedTime: questionDetails.modifiedTime,
        tags: questionDetails.questionTags,
        votes: questionDetails.votes,
        upvotes: questionDetails.upvotes,
        downvotes: questionDetails.downvotes,
        comments: questionDetails.comments,
        numberOfAnswers: questionDetails.numberOfAnswers,
        answers: questionDetails.answers,
        isAcceptedAnswerId: questionDetails.isAcceptedAnswerId,
        questionComments: questionDetails.questionComments,
        username: userDetails.username,
        profilePicture: userDetails.profilePicture,
        badges: userDetails.badges,
        userId: questionDetails.userId,
        reputation: userDetails.reputation,
        answers : answers
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
      const result = await Posts.updateOne(
        { _id: questionId },
        { $inc: { views: 1 } }
      );
      console.log(result);

      const res = await QuestionViews.updateOne(
        { _id: questionId, date: date },
        {
          $set: {
            _id: questionId,
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
    let type = data.type;
    var modifiedAt={
      type:type,
      date:time.toISOString()
    }
    try {
      const newPost = new Posts({
        questionTitle: data.questionTitle,
        postType: "answer",
        parentId: data.questionId,
        description: data.description,
        shortdesc: data.shortdesc,
        questionTags: data.questionTags,
        addedAt: time.toISOString(),
        modifiedAt: modifiedAt,
        userId: data.userId,
      });
      const response = await newPost.save();
      return this.responseGenerator(200, response);
    } catch (err) {
      console.error("Error when posting answer ", err);
    }
  };

  postCommentToAnswer = async (data) => {
    const { answerId, description, userId,username } = data;
    let time = new Date();

    const comment = {
      description: description,
      userId: userId,
      username:username,
      postedOn: time.toISOString(),
    };

    try {
      const response = await Posts.findByIdAndUpdate(answerId, {
        $push: { comments: comment },
      }, {
        upsert: true, new: true
      });

      await UserDetails.updateOne({_id : userId},  {$inc : {commentsCount : 1}});
      console.log("comment successfully added to answer",answerId)
      res.status(200).send(response.comments);
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  };
}

export default QuestionController;
