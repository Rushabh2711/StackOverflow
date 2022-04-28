import { make_request } from "../../../../kafka/client.js";

class PostController {
  create = async (req, res) => {
    // console.log("Add posts");
    // let date = new Date();
    // let approvalstatus = req.body.imageUrl ? false : true;
  };

  getAllQuestions = async (req, res) => {
    // try {
    //   console.log("Get all posts");
    //   const response = await Post.find({
    //     postTypeId: 1,
    //   });
    //   res.status(200).send({
    //     posts: response,
    //   });
    // } catch (err) {
    //   console.error(err);
    // }
  };

  fetchQuestionDetails = async (req, res) => {
    // console.log("Inside post controller, about to make Kafka request");
    // const message = {};
    // message.body = req.params;
    // message.path = req.route.path;
    // make_request("post", message, (err, results) => {
    //   if (err) {
    //     console.error(err);
    //     res.json({
    //       status: "Error",
    //       msg: "System error, try again",
    //     });
    //   } else {
    //     console.log("Fetched question details with kafka-backend");
    //     console.log(results);
    //     res.json(results);
    //     res.end();
    //   }
    // });
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
}

export default PostController;
