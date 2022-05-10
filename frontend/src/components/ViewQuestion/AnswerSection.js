import React, { useEffect, useState } from "react";
import axios from "axios";
import { Avatar } from "@material-ui/core";
import { stringAvatar } from "../../utils/Avatar";
import ReactQuill from "react-quill";
import Comments from "./Comments";
import Author from "./Author";

export default function Answer(props) {
  const { answer, question_id, question_author } = props;
  const [answeredUser, SetansweredUser] = useState("");
  const [isAcceptedAnswer, SetisAcceptedAnswer] = useState(answer.isAccepted);
  const [voteCount, setvoteCount] = useState(parseInt(answer?.upvotes) - parseInt(answer?.downvotes));
  // useEffect(() => {
  //   const body = {
  //     user_id: answer.user_id,
  //   }
  //   axios.post(`/user/getuser`, body).then((res) => {
  //     console.log(res.data);
  //     SetansweredUser(res.data);

  //   }).catch(err => {
  //     console.log(err)
  //   });
  // }, [answer,question_id]);
  useEffect(() => {
    axios.get(`http://localhost:3001/user/${answer.userId}`).then((res) => {
      console.log(res.data[0]);
      SetansweredUser(res.data[0]);
    }).catch(err => {
      console.log(err)
    });

  }, [answer]);
  const votePost = async (e) => {
    const body = {
      postId: answer._id,
      // postType: "answer",
      voteType: e.taregt.name
    }
    await axios.post(`http://localhost:3001/votePost`, body).then((res) => {
      console.log(res.data);
      if (e.taregt.name === 'Upvote') {
        setvoteCount(voteCount + 1)
      }
      else {
        setvoteCount(voteCount - 1)
      }
    }).catch(err => {
      console.log(err)
    });
  }
  const handleAcceptAnswer = async (e) => {
    if (question_author) {
      const body = {
        postId: answer._id,
        voteType: e.taregt.name
      }
      await axios.post(`http://localhost:3001/votePost`, body).then((res) => {
        console.log(res.data);
        if(res.data){
          SetisAcceptedAnswer(true)
        }
        else{
          SetisAcceptedAnswer(false)
        }
      }).catch(err => {
        console.log(err)
      });
    }
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

            {/* <p className="arrow" style={{ "fontSize": "1.3rem" }}>{parseInt(answer?.upvotes) - parseInt(answer?.downvotes)}</p> */}
            <p className="arrow" style={{ "fontSize": "1.3rem" }}>{voteCount}</p>

            <p className="arrow votes" name="Downvote" onClick={votePost}>▼</p>
            {isAcceptedAnswer ? <svg aria-hidden="true" onClick={handleAcceptAnswer} className={question_author ? "svg-Trueicon votes" : "svg-Trueicon"} color="red" width="36" height="36" viewBox="0 0 36 36"><path d="m6 14 8 8L30 6v8L14 30l-8-8v-8Z"></path></svg> :
              <svg aria-hidden="true" fill="#00000040" onClick={handleAcceptAnswer} className={question_author ? "votes" : ""} color="red" width="36" height="36" viewBox="0 0 36 36"><path d="m6 14 8 8L30 6v8L14 30l-8-8v-8Z"></path></svg>}
            {/* <svg aria-hidden="true" class="svg-icon iconCheckmarkLg" width="36" height="36" viewBox="0 0 36 36"><path d="m6 14 8 8L30 6v8L14 30l-8-8v-8Z"></path></svg> */}
            {/* <svg aria-hidden="true"  class="svg-icon iconBookmark" width="18" height="18" viewBox="0 0 18 18"><path d="M6 1a2 2 0 0 0-2 2v14l5-4 5 4V3a2 2 0 0 0-2-2H6Zm3.9 3.83h2.9l-2.35 1.7.9 2.77L9 7.59l-2.35 1.7.9-2.76-2.35-1.7h2.9L9 2.06l.9 2.77Z"></path></svg> */}
          </div>
        </div>
        <div className="question-answer" style={{ marginBottom: "10px" }}>
          <ReactQuill
            value={answer.description}
            readOnly={true}
            theme={"bubble"}
          />
          <Author author={answeredUser} createdTime={answer?.addedAt} isQuestion={false}/>

          {/* {ReactHtmlParser(answer.description)} */}{console.log("answer ID", answer._id)}
          <Comments comments={answer?.comments} isQuestionComment={false} question_id={answer._id} answer_id={answer._id} />
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
          {/* <div className="author_ans">
            <small>
              answered {new Date(answer.addedAt).toLocaleString()}
            </small>
            <div className="auth-details">
              <Avatar {...stringAvatar(answer?.user?.username)} />
              <p>
                {answeredUser?.username
                  ? answeredUser.username
                  : "Virag B"}
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>

  );
}
