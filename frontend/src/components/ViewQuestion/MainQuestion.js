import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Editor from "react-quill/lib/toolbar";
import axios from "axios";
// import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import "./index.css";
// import { useSelector } from "react-redux";
//import { selectUser } from "../../feature/userSlice";
import { stringAvatar } from "../../utils/Avatar";
import questions from "../../dummydata/questions.json";
import "./AllQuestions.css";
import "./Main.css";
import QuillEditor from "../Questions/Editor";
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'
import Answer from "./AnswerSection";
import Question from "./QuestionSection";


function MainQuestion() {
  //let search = window.location.search;
  //const params = new URLSearchParams(search);
 // const id = "627456028ee4459e04591bb0"//params.get("q");
  const { id } = useParams();
  const [isSameUser, SetisSameUser] = useState(false);// this will use for indentify to user has permission to check accepted answer or not
  const [questionData, setQuestionData] = useState("");
  const [answer, setAnswer] = useState("");
  // const [show, setShow] = useState("");
  // const [comment, setComment] = useState("");
  // const [comments, setComments] = useState([]);
  const user = ""//useSelector(selectUser);

  const handleQuill = (value) => {
    setAnswer(value);
  };
  useEffect(() => {
    console.log("inside")
          axios
           .get(`http://localhost:3001/questions/${id}`)
           .then((res) => {
            console.log(res.data.response); 
            setQuestionData(res.data.response)
          })
           .catch((err) => console.log(err));
    console.log("data",questionData)
    if(questionData.userId===localStorage.getItem("userId")){
      SetisSameUser(true)
    }
  }, [id]);

  // useEffect(() => {
  //   async function getFunctionDetails() {
  //     await axios
  //       .get(`/api/question/${id}`)
  //       .then((res) => setQuestionData(res.data[0]))
  //       .catch((err) => console.log(err));
  //   }
  //   getFunctionDetails();
  // }, [id]);
  // useEffect(() => {
  //   setQuestionData(questions.questions[0])
  //   console.log("data",questionData)
  //   console.log("dawwwta",questions[0])
  // }, [questionData, comments,id]);
  
  // useEffect(() => {
  //   setQuestionData(questions.questions[0])
  //   console.log("data",questionData)
  // }, []);

  async function getUpdatedAnswer() {
    await axios
      .get(`/api/question/${id}`)
      .then((res) => setQuestionData(res.data[0]))
      .catch((err) => console.log(err));
  }

  // console.log(questionData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("body",answer)
      if (answer !== "") {
        const bodyJSON = {
          description: answer,
          questionId:questionData.questionId,
          questionTitle:questionData.questionTitle,
          questionTags:questionData.tags,
          userId:"62763e62bfe0a2faeddf0270",//localStorage.getItem('userId')
          username:"harsha"//localStorage.getItem('username')
        };
        await axios
          .put("http://localhost:3001/question/postAnswer", bodyJSON)
          .then((res) => {
             console.log(res.data);
             setAnswer("")
            alert("Answer added successfully");
            //history.push("/");
          })
          .catch((err) => {
            console.log(err);
          });
      }
      else{
        alert("Please insert answer first!!!")
      }
  };
  const handleSubmit1 = async () => {
    console.log(answer)
    // const body = {
    //   question_id: id,
    //   answer: answer,
    //   user: user,
    // };
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    // await axios
    //   .post("/api/answer", body, config)
    //   .then(() => {
    //     alert("Answer added successfully");
    //     setAnswer("");
    //     getUpdatedAnswer();
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2 className="main-question">{questionData?.questionTitle} </h2>
          <Link to="/ask">
            <button>Ask Question</button>
          </Link>
        </div>
        <div className="main-desc">
          <div className="info">
            <p>
              Asked
              <span>{new Date(questionData?.createdTime).toLocaleString()}</span>
            </p>
            <p>
              Active<span>today</span>
            </p>
            <p>
              Viewed<span>{questionData.views} times</span>
            </p>
          </div>
        </div>
        <div className="all-questions">
         {questionData && <Question question={questionData} />}
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
              fontWeight: "400",
            }}
          >
            {questionData && questionData?.answers?.length? questionData.answers.length +" Answers":""} 
          </p>
          { questionData?.answers && questionData?.answers.map((_q) => (
            <Answer answer={_q} question_id={questionData.questionId} question_author={isSameUser}/>
          
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
          onChange={setAnswer}
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
