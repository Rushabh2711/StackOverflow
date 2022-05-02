import React, { useEffect, useState } from "react";
import { TextField, Box, Typography, Button,Autocomplete } from '@mui/material';
import QuillEditor from "../components/Questions/Editor";

import { useSelector } from "react-redux";
import ReactQuill , { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6
import "../components/Questions/index.css";
import Editor from "react-quill/lib/toolbar";
import axios from "axios";
//import { TagsInput } from "react-tag-input-component";
// import { selectUser } from "../../feature/userSlice";
import { useNavigate } from "react-router-dom";
// import ChipsArray from "./TagsInput";
import ImageUploader from "quill-image-uploader";
//import ImageResize from "quill-image-resize-module-react";

// #2 register module
Quill.register("modules/imageUploader", ImageUploader);
function Ask() {
  //const user = useSelector(selectUser);
 
  const top100Films = [
    'Node',
    'React',
    'HTML',
    'JAVA',
    'javascript',
    "AWS",
    'C#'
  ];
  const [title, setTitle] = useState("");
  const [body, setBody] = useState(`<p>test 1 descriptiondfsfsdf asdsadas</p><p><img src="http://localhost:3001/download-file/node.png"></p><pre class="ql-syntax" spellcheck="false">asdfasdsa
  asdfasfas
  </pre><p><br></p>`);
  const [tag, setTag] = useState([]);
  const history = useNavigate();

  const handleQuill = (value) => {
    setBody(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title !== "" && body !== "") {
      const bodyJSON = {
        title: title,
        body: body,
        tag: JSON.stringify(tag),
       // user: user,
      };
      await axios
        .post("/api/question", bodyJSON)
        .then((res) => {
          // console.log(res.data);
          alert("Question added successfully");
          history.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
 
  return (
    <div className="add-question">
      <div className="add-question-container">
        <div className="head-title">
          <h1>Ask a public question</h1>
        </div>
        <div className="question-container">
          <div className="question-options">
            <div className="question-option">
              <div className="title">
                <h3 >Title</h3>
                <small>
                  Be specific and imagine you’re asking a question to another
                  person
                </small>
                <TextField
           value={title}
            // label="Title"
            id="outlined-size-small"
            size="small"
            onChange={(event, newTitle) => {
              setTitle(newTitle);
            }}
          />
                {/* <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="e.g Is there an R function for finding teh index of an element in a vector?"
                /> */}
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Body</h3>
                <small>
                  Include all the information someone would need to answer your
                  question
                </small>
                <QuillEditor
                 body={body}
                />
              </div>
            </div>
            <Autocomplete
            // sx={{ pt: 2, width: 800 }}
            multiple
            id="tags-outlined"
            options={top100Films}
            onChange={(event, newValue) => {
              setTag(newValue);
              console.log(tag)
            }}
            value={tag}
            //isOptionEqualToValue={(option) => option.title }
            //getOptionLabel={(option) => option.title}
            //defaultValue={[top100Films[1]]}
            filterSelectedOptions

            renderInput={(params) => (
              <TextField
                {...params}
                label="Tags"
                placeholder="Tags"
              />
            )}
          />
          </div>
        </div>

        <button onClick={handleSubmit} className="button">
          Add your question
        </button>
      </div>
    </div>
  );
}

export default Ask;
