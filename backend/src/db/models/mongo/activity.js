const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  activity_type: { type: String, required: true },
  by: { type: String, required: true },
  license: { type: String },
  comment: { type: String },
  time: { type: Date, required: true },
  questionId: {
    type: Schema.Types.ObjectId,
    ref: "question",
  },
});

const Activities = mongoose.model("activity", activitySchema);
export default Activities;