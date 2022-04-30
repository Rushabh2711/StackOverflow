import mongoose from "mongoose";
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  title: { type: String, required: true },
  tags: [{ type: String }],
  description: { type: String, required: true },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  numberOfAnswers: { type: Number, default: 0 },
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
          description: { type: String, required: true },
          userId: { type: String, required: true },
          postedOn: { type: Date, required: true },
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
      postedOn: { type: Date, required: true },
    },
  ],
  userId: { type: String, required: true, index: true },
  username: { type: String, required: true },
  Activity: [
    {
      type: Schema.Types.ObjectId,
      ref: "activity",
    },
  ],
});

const Questions = mongoose.model("question", questionSchema);
export default Questions;
