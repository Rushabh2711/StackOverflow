const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userTagInfoSchema = new Schema({
  userId: { type: String, required: true },
  tagName: { type: String, required: true },
  score: int,
  posts: int,
});

const userTagModel = mongoose.model("TagInfo", userTagInfoSchema);
module.exports = userTagModel;
