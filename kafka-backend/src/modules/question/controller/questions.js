import Questions from "../../../db/models/mongo/question.js";
import QuestionViews from "../../../db/models/mongo/questionViews.js";

class QuestionController {
  responseGenerator = (statusCode, message) => ({
    status: statusCode,
    response: message,
  });

  addView = async (data) => {
    console.log(data);
    const questionId = data.questionId;
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

  fetchQuestionDetails = async (data) => {
    console.log(data);
    const questionId = data.questionId;
    try {
      const questionDetails = await Questions.find({ id: questionId });
      const questionViews = await QuestionViews.findById({
        questionId: questionId,
      });
      console.log(JSON.stringify(questionDetails));
      const result = {
        questionId: questionDetails._id,
        questionTitle: questionDetails.title,
        numberOfViews: questionViews.views,
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
      });

      console.log(JSON.stringify(response));
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
      const response = await Questions.findByIdAndUpdate(questionId, {
        $push: { "answers.comments": comment },
      });

      console.log(JSON.stringify(response));
      return this.responseGenerator(200, "Added new comment to answer");
    } catch (err) {
      console.error("Error when posting comment to answer ", err);
    }
  };
}

export default QuestionController;
