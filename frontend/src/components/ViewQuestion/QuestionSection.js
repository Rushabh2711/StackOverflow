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
  const [aksedQuestionUser, setAksedQuestionUser] = useState("");
  const [isBookmarked, SetIsBookmarked] = useState(false);
  const [text, setText] = React.useState(`<p>test 1 descriptiondfsfsdf asdsadas</p><p><img src="http://localhost:3001/download-file/node.png"></p><pre class="ql-syntax" spellcheck="false">public enum BookingStatus {
    [Description("Pending")]
    Pending = 0,
    [Description("Booked")]
    Booked = 1
}  
</pre>`);
  useEffect(() => {
    const body = {
      user_id: question.user_id,
    }
    axios.post(`/user/getuser`, body).then((res) => {
      console.log(res.data);
      setAksedQuestionUser(res.data);
    }).catch(err => {
      console.log(err)
    });
  }, [question]);

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

            <p className="arrow" style={{ "fontSize": "1.3rem" }}>{parseInt(question?.upvotes) - parseInt(question?.downvotes)}</p>

            <p className="arrow votes" name="Downvote" onClick={votePost}>▼</p>
            <BookmarkIcon className="votes" onClick={addBookmark} />

            <HistoryIcon className="votes" />
          </div>
        </div>
        <div className="question-answer" style={{ marginBottom: "10px" }}>
          <ReactQuill
            value={text}
            readOnly={true}
            theme={"bubble"}
          />
          <Comments comments={question?.comments} isQuestionComment={true} question_id={question.question_id} answer_id={question.question_id} />

          <div className="author">
                <small>
                  asked {new Date(question?.addedAt).toLocaleString()}
                </small>
                <div className="auth-details">
                  <Avatar {...stringAvatar(question?.user?.displayName)} />
                  <p>
                    {question?.user?.displayName
                      ? question?.user?.displayName
                      : "Virag B"}
                  </p>
                </div>
              </div>
        </div>
      </div>
    </>

  );
}
