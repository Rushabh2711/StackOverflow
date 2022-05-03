import React, { useState } from "react";
import axios from "axios";

export default function Comments(props) {
  const { comments, answer_id, question_id, isQuestionComment } = props;
  const [showCommentBox, setshowCommentBox] = useState("");
  const [commentText, setCommentText] = useState("");
  const handleComment = async () => {
    if (commentText !== "") {
      const body = {
        question_id: question_id,
        answer_id: answer_id,
        comment: commentText,
        isQuestionComment: isQuestionComment
        // user: user,
      };
      await axios.post(`/api/postComment`, body).then((res) => {
        setCommentText("");
        setshowCommentBox("");
      });
    }
  };
  return (
    <div>
      <div className="comments">
        <div className="comment">
          {console.log("virag", answer_id)}
          {comments &&
            comments.map((comment) => (

              <p key={comment?.answer_id}>
                {comment.description}{" "} -
                <span>
                  {comment.username ? comment.username : "Nate Eldredge"}
                </span>{" "}
                {"    "}
                <small>
                  {new Date(comment.created_date).toLocaleString()}
                </small>
              </p>
            ))}
        </div>
        {!showCommentBox ? <p id={answer_id} onClick={() => setshowCommentBox(answer_id)}>Add a comment</p> : <p id={answer_id} onClick={() => setshowCommentBox("")}>Add a comment</p>}
        {showCommentBox && showCommentBox === answer_id && (
          <div className="title">
            <textarea
              style={{
                margin: "5px 0px",
                padding: "10px",
                border: "1px solid rgba(0, 0, 0, 0.2)",
                borderRadius: "3px",
                outline: "none",
              }}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              type="text"
              placeholder="Add your comment..."
              rows={5}
            />
            <button
              onClick={handleComment}
              style={{
                maxWidth: "fit-content",
              }}
            >
              Add comment
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
