import { make_request } from "../../../../kafka/client.js";
import Post from "../../../db/models/sql/Post.js";

class PostController {
  create = async (req, res) => {
    console.log("Add posts");
    let date = new Date();
    let approvalstatus = req.body.imageUrl ? false : true;
    let parentId = req.body.postTypeId == 2 ? req.body.questionId : null;
    try {
      const newPost = new Post({
        postTypeId: req.body.postTypeId,
        acceptedAnswerId: null,
        parentId: parentId,
        ownerId: req.body.ownerId,
        creationDate: date,
        ownerName: req.body.ownerName,
        modifiedDate: date,
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
        tags: req.body.tags.toString(),
        upvotes: 0,
        downvotes: 0,
        answerCount: 0,
        views: 0,
        approvalstatus: approvalstatus,
        isBookmarked: false,
      });
      const response = await newPost.save();
      res.status(200).send(response);
    } catch (err) {
      console.error(err);
    }
  };

  getPosts = async (req, res) => {
    try {
      console.log("Get all posts");
      const response = await Post.findAll();
      res.status(200).send({
        posts: response,
      });
    } catch (err) {
      console.error(err);
    }
  };

  getPostsByUser = async (req, res) => {
    try {
      const response = await Post.find({
        ownerId: req.params.userId,
      });
      res.status(200).send({
        userPosts: response,
      });
    } catch (err) {
      console.error(err);
    }
  };

  fetchPostDetails = async (req, res) => {};
}

export default PostController;
