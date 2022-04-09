const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  title: { type: String, required: true },
  tags: [{ tagId: String, required: true }],
  images: [{ url: String }],
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  numberOfAnswers: { type: Number, default: 0 },
  number_of_views: { type: Number, default: 0 },
  addedAt: { type: Date, required: true },
  modified_time: { type: Date },
  answers: [
    {
      userId: { type: String, required: true },
      description: { type: String, required: true },
      upvotes: { type: Number, default: 0 },
      downvotes: { type: Number, default: 0 },
      comments: [
        {
          Description: { type: String, required: true },
          userId: { type: String, required: true },
        },
      ],
      created_time: { type: Date, required: true },
      modified_time: { type: Date },
      isBest: { type: Boolean, default: false },
    },
  ],
  question_comments: [
    {
      description: { type: String, required: true },
      userId: { type: String, required: true },
    },
  ],
  userId: { type: String, required: true, index: true },
  Activity: [
    {
      type: Schema.Types.ObjectId,
      ref: "Activity",
    },
  ],
  status: String,
});

const questionModel = mongoose.model("Question", questionSchema);
module.exports = questionModel;

// username: String,
// profile_pic: String,
// reputation: int,
// gold: int,
// silver: int,
// bronze: int,
