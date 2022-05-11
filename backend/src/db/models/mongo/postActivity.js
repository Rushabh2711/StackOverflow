const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postActivitySchema = new Schema({
  activityType: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "userDetails" },
  license: { type: String },
  comment: { type: String },
  time: { type: Date, required: true },
});

const PostActivities = mongoose.model("postActivity", postActivitySchema);
export default PostActivities;
