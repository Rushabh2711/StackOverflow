import React, { useEffect, useState } from "react";
import axios from "axios";
import { Avatar } from "@material-ui/core";
import { stringAvatar } from "../../utils/Avatar";
import ReactQuill from "react-quill";
import Comments from "./Comments";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import HistoryIcon from "@material-ui/icons/History";
export default function Question(props) {
  const { question } = props;
  const [aksedQuestionUser, setAksedQuestionUser] = useState();
  const [isBookmarked, SetIsBookmarked] = useState(false);
  //   const [text, setText] = React.useState(`<p>test 1 descriptiondfsfsdf asdsadas</p><p><img src="http://localhost:3001/download-file/node.png"></p><pre class="ql-syntax" spellcheck="false">public enum BookingStatus {
  //     [Description("Pending")]
  //     Pending = 0,
  //     [Description("Booked")]
  //     Booked = 1
  // }  
  // </pre>`);
  const [text, setText] = useState(props.question.description)
  useEffect(() => {
    const body = {
      userId: question.userId,
    }
    axios.get(`http://localhost:3001/user/${question.userId}`).then((res) => {
      console.log(res.data[0]);
      setAksedQuestionUser(res.data[0]);
    }).catch(err => {
      console.log(err)
    });
  }, [question]);

  useEffect(() => {
    setText(question.description)
    console.log("first", question)
  }, [props.question, question, question.description])

  const votePost = async (e) => {
    const body = {
      question_id: question.question_id,
      postType: "Question",
      voteType: e.taregt.name
    }
    await axios.post(`/api/votePost/`, body).then((res) => {
      //setShow(false);
      console.log(res.data);
    }).catch(err => {
      console.log(err)
    });
  }
  const addBookmark = async () => {
    const body = {
      question_id: question.question_id,
      // comment: comment,
      // user: user,
    };
    await axios.post(`/api/bookmark`, body).then((res) => {
      // setShow(false);
      console.log(res.data);
    }).catch(err => {
      console.log(err)
    });

    // setShow(true)
  };
  return (
    <>
      <div
        style={{
          borderBottom: "1px solid #eee",
        }}
        key={question.question_id}
        className="all-questions-container"
      >
        <div className="all-questions-left">
          <div className="all-options">
            <p className="arrow votes" name="Upvote" onClick={votePost}>▲</p>

            <p className="arrow" style={{ "fontSize": "1.3rem" }}>{question?.upvotes === 0 ? 0 : parseInt(question?.upvotes) - parseInt(question?.downvotes)}</p>

            <p className="arrow votes" name="Downvote" onClick={votePost}>▼</p>
            <svg aria-hidden="true" className="svg-Trueicon votes" color="red" width="36" height="36" viewBox="0 0 36 36"><path d="m6 14 8 8L30 6v8L14 30l-8-8v-8Z"></path></svg>
            <BookmarkIcon className="votes" onClick={addBookmark} style={{ color: "cea81c" }}/>

            <HistoryIcon className="votes" />
          </div>
        </div>
        <div className="question-answer" style={{ marginBottom: "10px" }}>
          {/* <div dangerouslySetInnerHTML={{__html: text}}></div> */}
          <ReactQuill
            value={text}
            readOnly={true}
            theme={"bubble"}
          />
          <Comments comments={question?.comments} isQuestionComment={true} question_id={question.questionId} answer_id={question.questionId} />

          <div className="author">
            <small>
              asked {new Date(question?.createdTime).toLocaleString()}
            </small>
            <div className="auth-details">
              <Avatar {...stringAvatar(question?.user?.displayName)} />
              <p>
                {aksedQuestionUser?.username
                  ? aksedQuestionUser?.username
                  : "Virag B"}
              </p>
              {
                aksedQuestionUser?.badges.length > 0 ?
                  <span class="userBadges_queans" title="badges" aria-hidden="true">
                    {aksedQuestionUser?.badges?.gold !== 0 ? <><span class="badge1"></span><span class="badgecount">{aksedQuestionUser.badges.gold}</span></> : ""}
                    {aksedQuestionUser?.badges?.gold !== 0 ? <><span class="badge2"></span><span class="badgecount">{aksedQuestionUser.badges.silver}</span></> : ""}
                    {aksedQuestionUser?.badges?.gold !== 0 ? <><span class="badge3"></span><span class="badgecount">{aksedQuestionUser.badges.bronze}</span></> : ""}
                  </span>
                  : ""
              }
              <span class="userBadges_queans" title="badges" aria-hidden="true">
                <span class="badge1"></span><span class="badgecount">8</span>
                <span class="badge2"></span><span class="badgecount">10</span>
                <span class="badge3"></span><span class="badgecount">11</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
