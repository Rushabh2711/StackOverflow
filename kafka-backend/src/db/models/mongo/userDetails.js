import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userDetailsSchema = new Schema({
    userId: {type: Number},
    username: {type: String},
    emailId: {type: String},
    profilePicture: { type: String },
    accountType: {type: String},
    reputation: {type: Number},
    location: {type: Number},
    tags: [
        {name: {type: String}},
        {score: {type: Number}},
        {posts: {type: Number}}
    ],
    badges: [
        {name: {type: String}},
        {type: {type: String}},
        {tagBased: {type: Boolean}}
    ],
    bookmarkedQuestions: [
        {
            questionId: {type: Schema.Types.ObjectId,ref: "question"}
        }
    ],
    questionsAnswered: [
        {
            questionId: {type: Schema.Types.ObjectId,ref: "question"},
            answerId: {type: Schema.Types.ObjectId}
        }
    ],
    joiningDate: {type: Date},
    visitedTime: {type: Date},
    questionsAskedCount: {type: Number},
    questionsAnsweredCount: {type: Number},
    questionsViewCount: {type: Number},
    about: {type: String},
});

userDetailsSchema.virtual('answer', {
    ref: 'question',
    localField: 'questionsAnswered.answerId',
    foreignField: 'answers._id'
});

  
const UserDetails = mongoose.model("userDetails", userDetailsSchema);

export default UserDetails;