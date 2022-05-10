const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionActivitySchema = new Schema({
  activityType: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "userDetails" },
  license: { type: String },
  comment: { type: String },
  time: { type: Date, required: true },
});

const QuestionActivities = mongoose.model("questionActivity", questionActivitySchema);
export default QuestionActivities;
