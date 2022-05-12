import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema({
  // _id: mongoose.ObjectId,
  questionTitle: { type: String, required: true },
  postType: { type: String, required: true },
  parentId: { type: Schema.Types.ObjectId },
  description: { type: String, required: true },
  votes: { type: Number, default: 0 },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  views: { type: Number},
  numberOfAnswers: { type: Number},
  addedAt: { type: Date, required: true },
  modifiedAt: { type: Date, required: true },
  isAcceptedAnswerId: { type: Schema.Types.ObjectId },
  status: { type: String },
  isAccepted: { type: Boolean },
  userId: { type: Schema.Types.ObjectId, required: true },
  comments: [
    {
      description: { type: String, required: true },
      userId: { type: String, required: true },
      username: { type: String, required: true },
      postedOn: { type: Date, required: true },
    },
  ],
  questionTags: [
    {
      tagId: { type: Schema.Types.ObjectId },
      name: { type: String },
    },
  ],
});

const Posts = mongoose.model("post", postSchema);
export default Posts;
