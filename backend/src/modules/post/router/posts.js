import express from "express";
import PostController from "../controller/posts.js";

const postRouter = express.Router();

const postController = new PostController();

postRouter.post("/user/addPost", postController.create);
postRouter.get("/getAllPosts", postController.getPosts);
postRouter.get("/user/getPosts", postController.getPostsByUser);

export default postRouter;
