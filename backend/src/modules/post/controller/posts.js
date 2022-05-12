import { make_request } from "../../../../kafka/client.js";
import Posts from "../../../db/models/mongo/posts.js";
import Tags from "../../../db/models/mongo/tags.js";
import Votes from "../../../db/models/mongo/votes.js";
import PostActivities from "../../../db/models/mongo/postActivity.js";
import userActivities from "../../../db/models/mongo/userActivity.js";


class QuestionController {
  checkHealth = async (req, res) => {
    res.status(200).send("Up and Running");
  };

  postQuestion = async (req, res) => {
    console.log("Add post");
    let time = new Date();
    let tags = req.body.tags;
    try {
      const newPost = new Posts({
        questionTitle: req.body.title,
        postType: "question",
        questionTags: tags,
        description: req.body.description,
        shortdesc: req.body.shortdesc,
        addedAt: time.toISOString(),
        modifiedAt: time.toISOString(),
        status: req.body.description.includes('src="data:image/') ? "PENDING" : "APPROVED",
        userId: req.body.userId,
      });

      const response = await newPost.save();
      // let postId = response._id;
      // tags.map(tag => {
      //   let tagId = tag.tagId;
      //   await Tags.findByIdAndUpdate(tagId, )
      // })
      
      res.status(200).send(response);
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  };
  editQuestion = async (req, res) => {
    console.log("Add post");
    const {  postId,isAdmin } = req.body;
    let time = new Date();
    var status=(req.body.description.includes('src="data:image/') || isAdmin) ?  "APPROVED":"PENDING";
    try {
      const filter = { _id: postId };
      const update ={ 
        questionTags: req.body.tags,
        description: req.body.description,
        questionTitle: req.body.title,
        modifiedAt: time.toISOString(),
        status: status,
      };

       const response = await Posts.findOneAndUpdate(filter, update,{
        upsert: true, new: true
      });
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
    make_request("post", message, (err, results) => {
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
      let answers = await Posts.find(
        { postType: "answer", userId: userId },
        { parentId: 1, _id: 0 }
      );
      // console.log(answers);
      answers.map(async (answer) => {
        console.log("parentId", answer.parentId);
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
        });
      });
      res.status(200).send(results);
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  };

  votePost = async (req, res) => {
    const { userId, voteType, postId} = req.body;
    let response;
    let time = new Date();
    try {
      const result = await Votes.find({userId: userId, postId: postId, voteType: voteType});
      console.log(result);
      if(result && result.length > 0)
      {
        res.status(200).send("User already performed" + voteType + "on this post" + postId);
      }
      else
      {
        const newVote = new Votes({
          userId: userId,
          voteType: voteType,
          postId: postId,
          creationDate: time.toISOString()
        });
  
        const response = await newVote.save();
        res.status(200).send(response);
      }
        // const filter = { _id: postId };
        // const update =
        //   voteType == "Upvote"
        //     ? { $inc: { upvotes: 1 } }
        //     : { $inc: { downvotes: 1 } };

        // response = await Posts.findOneAndUpdate(filter, update,{
        //   upsert: true, new: true
        // });
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

  markAnswerAsAccepted = async (req, res) => {
    const {questionId, answerId} = req.body;
    
    try {
      let question = await Posts.findOneAndUpdate({_id : questionId}, 
          {
            "$set" : {isAcceptedAnswerId : answerId, isAccepted : true }
          },
          {new : true}
        );
      res.status(200).send(question);
      
    } catch (error) {
      console.error(err);
      res.status(400).send(err);
    }
  }
}

export default QuestionController;
