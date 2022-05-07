import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  postType: { type: String, required: true },
  parentId: { type: Schema.Types.ObjectId, default: null },
  description: { type: String, required: true },
  votes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  numberOfAnswers: { type: Number, default: 0 },
  addedAt: { type: Date, required: true },
  modifiedAt: { type: Date, required: true },
  isAcceptedAnswerId: { type: Schema.Types.ObjectId, default: null },
  status: { type: String, default: "PENDING" },
  isAccepted: { type: Boolean, default: false },
  userId: { type: Schema.Types.ObjectId, required: true },
  comments: [
    {
      description: { type: String, required: true },
      userId: { type: String, required: true },
      username: { type: String, required: true },
      postedOn: { type: Date, required: true },
    },
  ],
  tags: [
    {
      tagId: { type: Schema.Types.ObjectId },
      name: { type: String },
    },
  ],
});

const Posts = mongoose.model("post", postSchema);
export default Posts;