class PostController {
  responseGenerator = (statusCode, message) => ({
    status: statusCode,
    response: message,
  });

  fetchQuestionDetails = async (data) => {
    //   console.log(data);
    //   const questionId = data.questionId;
    //   try {
    //     const questionDetails = await Post.find({ id: questionId });
    //     console.log(JSON.stringify(questionDetails));
    //     const answers = await Post.find({ parentId: questionId });
    //     const result = {
    //       acceptedAnswerId: questionDetails.acceptedAnswerId,
    //       ownerId: questionDetails.ownerId,
    //       creationDate: questionDetails.creationDate,
    //       ownerName: questionDetails.ownerName,
    //       modifiedDate: questionDetails.modifiedDate,
    //       title: questionDetails.title,
    //       content: questionDetails.content,
    //       imageUrl: questionDetails.imageUrl,
    //       tags: questionDetails.tags.split(","),
    //       upvotes: questionDetails.upvotes,
    //       downvotes: questionDetails.downvotes,
    //       answerCount: questionDetails.answerCount,
    //       views: questionDetails.views,
    //       approvalstatus: questionDetails.approvalstatus,
    //       isBookmarked: questionDetails.isBookmarked,
    //       answers: answers,
    //     };
    //     return this.responseGenerator(200, result);
    //   } catch (err) {
    //     console.error("Error when fetching question details ", err);
    //     return this.responseGenerator(
    //       404,
    //       "Error when fetching question details"
    //     );
    //   }
  };
}

export default PostController;
