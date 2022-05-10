import React, { useEffect, useState } from "react";
import axios from "axios";
import { Avatar } from "@material-ui/core";
import { stringAvatar } from "../../utils/Avatar";
import ReactQuill from "react-quill";
import Comments from "./Comments";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import HistoryIcon from "@material-ui/icons/History";
import Author from "./Author";
import TagList from "./TagList";
export default function Question(props) {
  const { question } = props;
  const [aksedQuestionUser, setAksedQuestionUser] = useState();
  const [isBookmarked, SetIsBookmarked] = useState(false);
  const [voteCount, setvoteCount] = useState(parseInt(question?.upvotes) - parseInt(question?.downvotes));
  const [text, setText] = useState(props.question.description)
  useEffect(() => {
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
    console.log("vote",e.target.id);

    const body = {
      postId: question.questionId,
      // postType: "Question",
      voteType: e.target.id
    }
    await axios.put(`http://localhost:3001/votePost`, body).then((res) => {
      console.log(res.data);
      if( e.target.id==='Upvote'){
        setvoteCount(voteCount+1)
      }
      else{
        setvoteCount(voteCount-1)
      }
    }).catch(err => {
      console.log(err)
    });
  }
  const addBookmark = async () => {
    const body = {
      questionId: question.questionId,
      userId: "62763e62bfe0a2faeddf0270",//localStorage.getItem("userId")
    };
    await axios.put(`http://localhost:3001/user/question/bookmark`, body).then((res) => {
      console.log(res.data);
      SetIsBookmarked(true)
    }).catch(err => {
      console.log(err)
    });
  };
  const removeBookmark = async () => {
    const body = {
      questionId: question.questionId,
      userId: "62763e62bfe0a2faeddf0270",//localStorage.getItem("userId")
    };
    await axios.put(`http://localhost:3001/user/question/removebookmark`, body).then((res) => {
      console.log(res.data);
      SetIsBookmarked(false)
    }).catch(err => {
      console.log(err)
    });

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
            <p className="arrow votes" id="Upvote" onClick={votePost}>▲</p>

            {/* <p className="arrow" style={{ "fontSize": "1.3rem" }}>{question?.upvotes === 0 ? 0 : parseInt(question?.upvotes) - parseInt(question?.downvotes)}</p> */}
            <p className="arrow" style={{ "fontSize": "1.3rem" }}>{voteCount}</p>

            <p className="arrow votes" id="Downvote" onClick={votePost}>▼</p>
           
            {isBookmarked? <BookmarkIcon className="votes" onClick={removeBookmark} style={{ color: "cea81c" }}/>:<BookmarkIcon className="votes" onClick={addBookmark} />}
 
            <HistoryIcon className="votes" style={{ "fontSize": "1.5rem" }} />
          </div>
        </div>
        <div className="question-answer" style={{ marginBottom: "10px" }}>
          {/* <div dangerouslySetInnerHTML={{__html: text}}></div> */}
          <ReactQuill
            value={text}
            readOnly={true}
            theme={"bubble"}
          />
         <div style={{ width: '100%',textAlign:"left",padding:"10px" }}>

          {question?.tags&& question?.tags.map((tag)=>(
               <TagList tag={tag}/>
          ))}
          </div>
          <Author author={aksedQuestionUser} createdTime={question?.createdTime} isQuestion={true}/>

          <Comments comments={question?.comments} isQuestionComment={true} question_id={question.questionId} answer_id={question.questionId} />

          {/* <div className="author">
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
          </div> */}
        </div>
      </div>
    </>

  );
}
