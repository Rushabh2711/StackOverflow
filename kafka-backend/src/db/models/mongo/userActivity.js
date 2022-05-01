const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userActivitySchema = new Schema({
  questionId: { type: Schema.Types.ObjectId, ref: "question" },
  activityType: { type: String, required: true },
  date: { type: Date, required: true },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "userDetails",
  },
});

const userActivities = mongoose.model("userActivity", userActivitySchema);
export default userActivities;