import React, { useEffect, useState } from "react";
import axios from "axios";
import { Avatar } from "@material-ui/core";
import { stringAvatar } from "../../utils/Avatar";
import ReactQuill from "react-quill";
import Comments from "./Comments";

export default function Answer(props) {
  const { answer, question_id } = props;
  const [answeredUser, SetansweredUser] = useState("");
  useEffect(() => {
    const body = {
      user_id: answer.user_id,
    }
    axios.post(`/user/getuser`, body).then((res) => {
      console.log(res.data);
      SetansweredUser(res.data);

    }).catch(err => {
      console.log(err)
    });
  }, [answer,question_id]);
  
  const votePost = async (e) => {
    const body = {
      question_id: question_id,
      postType: "Answer",
      voteType: e.taregt.name
    }
    await axios.post(`/api/votePost/`, body).then((res) => {
      //setShow(false);
      console.log(res.data);
    }).catch(err => {
      console.log(err)
    });
  }
  return (
    <>
      <div
        style={{
          borderBottom: "1px solid #eee",
        }}
        key={answer.answer_id}
        className="all-questions-container"
      >
        <div className="all-questions-left">
          <div className="all-options">
            <p className="arrow votes" name="Upvote" onClick={votePost}>▲</p>

            <p className="arrow" style={{ "fontSize": "1.3rem" }}>{parseInt(answer?.upvotes) - parseInt(answer?.downvotes)}</p>

            <p className="arrow votes" name="Downvote" onClick={votePost}>▼</p>

            {/* <svg aria-hidden="true"  class="svg-icon iconBookmark" width="18" height="18" viewBox="0 0 18 18"><path d="M6 1a2 2 0 0 0-2 2v14l5-4 5 4V3a2 2 0 0 0-2-2H6Zm3.9 3.83h2.9l-2.35 1.7.9 2.77L9 7.59l-2.35 1.7.9-2.76-2.35-1.7h2.9L9 2.06l.9 2.77Z"></path></svg> */}
          </div>
        </div>
        <div className="question-answer" style={{ marginBottom: "10px" }}>
          <ReactQuill
            value={answer.description}
            readOnly={true}
            theme={"bubble"}
          />
          {/* {ReactHtmlParser(answer.description)} */}
          <Comments comments={answer?.comments} isQuestionComment={false} question_id={question_id} answer_id={answer.answer_id} />
          {/* <div className="comments">
                    <div className="comment">
                      {console.log("virag", _q?.comments)}
                      {_q?.comments &&
                        _q?.comments.map((_qd) => (

                          <p key={_qd?.answer_id}>
                            {_qd.description}{" "} -
                            <span>
                              {_qd.username ? _qd.username : "Nate Eldredge"}
                            </span>{" "}
                            {"    "}
                            <small>
                              {new Date(_qd.created_date).toLocaleString()}
                            </small>
                          </p>
                        ))}
                    </div>
                    {!show?<p id={_q.answer_id} onClick={() => setShow(_q.answer_id)}>Add a comment</p>:<p id={_q.answer_id} onClick={() => setShow("")}>Add a comment</p>}
                    {show && show ===_q.answer_id && (
                      <div className="title">
                        <textarea
                          style={{
                            margin: "5px 0px",
                            padding: "10px",
                            border: "1px solid rgba(0, 0, 0, 0.2)",
                            borderRadius: "3px",
                            outline: "none",
                          }}
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
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
                  </div> */}
          <div className="author_ans">
            <small>
              answered {new Date(answer.created_date).toLocaleString()}
            </small>
            <div className="auth-details">
              <Avatar {...stringAvatar(answer?.user?.displayName)} />
              <p>
                {answer?.user?.displayName
                  ? answer?.user?.displayName
                  : "Virag B"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
