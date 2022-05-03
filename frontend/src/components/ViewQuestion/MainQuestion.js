import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// import Editor from "react-quill/lib/toolbar";
import axios from "axios";
// import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import "./index.css";
// import { useSelector } from "react-redux";
//import { selectUser } from "../../feature/userSlice";
import { stringAvatar } from "../../utils/Avatar";
import toppostsJson from "../../dummydata/toppost.json";
import "./AllQuestions.css";
import "./Main.css";
import QuillEditor from "../Questions/Editor";
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'
import Answer from "./AnswerSection";
import Question from "./QuestionSection";


function MainQuestion() {
  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("q");
  
  const [questionData, setQuestionData] = useState(toppostsJson[0]);
  const [answer, setAnswer] = useState("");
  // const [show, setShow] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const user = ""//useSelector(selectUser);

  const handleQuill = (value) => {
    setAnswer(value);
  };

  useEffect(() => {
    async function getFunctionDetails() {
      await axios
        .get(`/api/question/${id}`)
        .then((res) => setQuestionData(res.data[0]))
        .catch((err) => console.log(err));
    }
    getFunctionDetails();
  }, [id]);
  useEffect(() => {
    setQuestionData(toppostsJson[0])
    setComments(toppostsJson[0].comments);
  }, [questionData, comments]);

  async function getUpdatedAnswer() {
    await axios
      .get(`/api/question/${id}`)
      .then((res) => setQuestionData(res.data[0]))
      .catch((err) => console.log(err));
  }

  // console.log(questionData);
  const handleSubmit = async () => {
    const body = {
      question_id: id,
      answer: answer,
      user: user,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .post("/api/answer", body, config)
      .then(() => {
        alert("Answer added successfully");
        setAnswer("");
        getUpdatedAnswer();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2 className="main-question">{questionData?.title} </h2>
          <Link to="/ask">
            <button>Ask Question</button>
          </Link>
        </div>
        <div className="main-desc">
          <div className="info">
            <p>
              Asked
              <span>{new Date(questionData?.addedAt).toLocaleString()}</span>
            </p>
            <p>
              Active<span>today</span>
            </p>
            <p>
              Viewed<span>43times</span>
            </p>
          </div>
        </div>
        <div className="all-questions">
          <Question question={questionData} />
        </div>
        <div
          style={{
            flexDirection: "column",
          }}
          className="all-questions"
        >
          <p
            style={{
              // marginBottom: "20px",
              textAlign: "left",
              fontSize: "1.3rem",
              // fontStyle:"bold",
              fontWeight: "300",
            }}
          >
            {questionData && questionData?.answers.length} Answers
          </p>
          { questionData?.answers && questionData?.answers.map((_q) => (
            <Answer answer={_q} question_id={questionData.question_id}/>
          
          ))}
        </div>

      </div>
      <div className="main-answer">
        <h3
          style={{
            fontSize: "22px",
            margin: "10px 0",
            fontWeight: "400",
          }}
        >
          Your Answer
        </h3>
        <QuillEditor
          body={answer}
          style={{ height: "200px" }}
        />

      </div>
      <button
        onClick={handleSubmit}
        style={{
          marginTop: "10px",
          maxWidth: "fit-content",
        }}
      >
        Post your answer
      </button>
    </div>
  );
}

export default MainQuestion;
