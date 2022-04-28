const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  title: { type: String, required: true },
  tags: [{ tag: String, required: true }],
  images: [{ url: String }],
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  numberOfAnswers: { type: Number, default: 0 },
  numberOfViews: { type: Number, default: 0 },
  addedAt: { type: Date, required: true },
  modifiedTime: { type: Date },
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
      createdTime: { type: Date, required: true },
      modifiedTime: { type: Date },
      isBest: { type: Boolean, default: false },
    },
  ],
  questionComments: [
    {
      description: { type: String, required: true },
      userId: { type: String, required: true },
    },
  ],
  userId: { type: String, required: true, index: true },
  Activity: [
    {
      type: Schema.Types.ObjectId,
      ref: "activity",
    },
  ],
  status: String,
});

const Questions = mongoose.model("question", questionSchema);
module.exports = Questions;
