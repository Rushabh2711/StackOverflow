import { make_request } from "../../../../kafka/client.js";
import Posts from "../../../db/models/mongo/posts.js";
import Tags from "../../../db/models/mongo/tags.js";
// const mongoose = require('mongoose');
import mongoose from 'mongoose';

class QuestionController {
  checkHealth = async (req, res) => {
    res.status(200).send("Up and Running");
  };

  postQuestion = async (req, res) => {
    console.log("Add post");
    let time = new Date();
    try {
      const newPost = new Posts({
        questionTitle: req.body.title,
        postType: "question",
        questionTags: req.body.tags,
        description: req.body.description,
        addedAt: time.toISOString(),
        modifiedAt: time.toISOString(),
        status: req.body.description.includes('src="data:image/') ? "PENDING" : "APPROVED",
        userId: req.body.userId,
      });

      const response = await newPost.save();
      let postId = response._id;
      //Trigger to update postId in tags
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
    console.log("Inside post controller, about to make Kafka request");
    const message = {};
    message.path = req.route.path;
    make_request("post", message, (err, results) => {
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
    make_request("post", message, (err, results) => {
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

  getQuestionsByTagId = async (req, res) => {
    try {
      const { tagId } = req.params;
      let results = [];
      let questionIds = await Tags.find({ _id: tagId}, {posts : 1});
      questionIds.map(async questionId => {
        let questionDetails = await Posts.findOne({ _id: questionId });
        console.log(questionDetails);
        if(questionDetails){
          results.push({
            questionId: questionDetails._id,
            questionTitle: questionDetails.questionTitle,
            description: questionDetails.description,
            createdTime: questionDetails.addedAt,
            modifiedTime: questionDetails.modifiedTime,
            tags: questionDetails.questionTags,
            votes: questionDetails.votes,
          })
        }
        res.status(200).send(results);
      })
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  }

  getQuestionsAskedByUser = async (req, res) => {
    const { userId } = req.params;
    try {
      const response = await Posts.find({ userId: userId, postType : "question"});
      res.status(200).send(response);
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  };

  getQuestionsAnswered = async (req, res) => {
    const { userId } = req.params;
    let results = [];
    try {
      let answers = await Posts.find({ postType: "answer", userId: userId }, {parentId: 1, _id:0});
      // console.log(answers);
      answers.map(async (answer) => {
        console.log("parentId",answer.parentId);
        let questionDetails = await Posts.findOne({ _id: answer.parentId });
        console.log(questionDetails);
        results.push({
          questionId: questionDetails._id,
          questionTitle: questionDetails.questionTitle,
          description: questionDetails.description,
          createdTime: questionDetails.addedAt,
          modifiedTime: questionDetails.modifiedTime,
          tags: questionDetails.questionTags,
          votes: questionDetails.votes,
        })
      });     
      res.status(200).send(results);
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  };

  bookmark = async (req, res) => {
    

  };

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
    make_request("post", message, (err, results) => {
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
    const { questionId, description, userId,username } = req.body;
    let time = new Date();
    console.log("comment successfully added",req.body)

    const comment = {
      description: description,
      userId: userId,
      username:username,
      postedOn: time.toISOString(),
    };

    try {
      const response = await Posts.findByIdAndUpdate(questionId, {
        $push: { comments: comment },
      }, {
        upsert: true, new: true
      });
      console.log("comment successfully added",response)
      res.status(200).send(response.comments);
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
