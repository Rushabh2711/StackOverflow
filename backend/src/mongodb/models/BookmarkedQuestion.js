const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  userId: { type: String, required: true },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
});

const bookmarkedQuestionModel = mongoose.model("BookmarkedQuestion", schema);
module.exports = bookmarkedQuestionModel;
