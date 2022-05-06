import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tagsSchema = new Schema({
  name: { type: String },
  description: { type: String},
  questions: [{ type: Schema.Types.ObjectId, ref: "question"}],
});

const Tags = mongoose.model("tag", tagsSchema);

export default Tags;
