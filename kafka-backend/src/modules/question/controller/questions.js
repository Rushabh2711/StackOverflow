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
}

export default QuestionController;
