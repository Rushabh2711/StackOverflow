import React, { useEffect, useState } from "react";
import { TextField, Box, Typography, Button,Autocomplete } from '@mui/material';
import QuillEditor from "../components/Questions/Editor";

import  { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6
import "../components/Questions/index.css";
import axios from "axios";
//import { TagsInput } from "react-tag-input-component";
// import { selectUser } from "../../feature/userSlice";
import { useNavigate } from "react-router-dom";
// import ChipsArray from "./TagsInput";
import ImageUploader from "quill-image-uploader";
import Navbar from "../components/Navbar/Navbar";
//import ImageResize from "quill-image-resize-module-react";

// #2 register module
Quill.register("modules/imageUploader", ImageUploader);
function Ask() {
  //const user = useSelector(selectUser);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [tag, setTag] = useState([]);
  const [tagList, setTagList] = useState([]);
  const history = useNavigate();

  const handleQuill = (value) => {
    setBody(value);
  };

  useEffect(() => {
    console.log("inside")
          axios
           .get(`http://localhost:3001/tags`)
           .then((res) => {
            setTagList(res.data)
          // console.log("response",res.data) 
          })
           .catch((err) => console.log(err));
    console.log("data",tagList)
    console.clear()
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("title",title)
    console.log("body",body)
    console.log("body",shortDesc)
    console.log("tag",tag)
    // if(body){
    //   var str2 = body.slice(body.indexOf("<img"),body.indexOf('"></p>')) 
    //   console.log(str2)
    //     var str3 = body.replaceAll(str2, "");
    //       str3 = str3.replaceAll('<p>', "");
    //       str3 = str3.replaceAll("</p>", "");
    //       str3 = str3.replaceAll("<br>", "");
    //       str3 = str3.replaceAll("<strong>", "");
    //       str3 = str3.replaceAll('<pre class="ql-syntax" spellcheck="false">', "");
    //      str3 = str3.replaceAll('</pre>', "");
    //      //str3 = str3.slice(body.indexOf("<img"),body.indexOf('"></p>')) 

    //     console.log("staring 3",str3)
    // }
      if (title !== "" && body !== "") {
        const bodyJSON = {
          title: title,
          description: body,
          shortdesc: shortDesc.replace(/\s/g,' '),
          tags: tag,
          userId:"62763e26bfe0a2faeddf026c",//localStorage.getItem('userId')
          username:"virag"//localStorage.getItem('username')
         // user: user,
        };
        await axios
          .post("http://localhost:3001/questions/ask", bodyJSON)
          .then((res) => {
             console.log(res.data);
            alert("Question added successfully");
            //history.push("/");
          })
          .catch((err) => {
            console.log(err);
          });
      }
  };
 

  const setTagsState = (tagObj) => {
    setTag(arr => [...arr, {tagId : tagObj._id, name: tagObj.name}])
  };
  

  return (
    <>
    <Navbar/>
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
                required
           value={title}
            // label="Title"
            id="outlined-size-small"
            size="small"
            onChange={(event, newTitle) => {
              setTitle(event.target.value);
              // console.log("title change ",event.target.value)
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
                 onBlur={setBody}
                 onChange={setBody}
                 shortText={setShortDesc}
                />
              </div>
            </div>
            {/* <Autocomplete
            required
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
          /> */}
          <Autocomplete
        multiple
        id="tags-outlined"
        options={tagList}
        getOptionLabel={(option) => option.name}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        // defaultValue={top100Films11}
         onChange={(event, tags) => {
            console.log(event); 
            console.log(tags); 

            setTagsState(tags.at(-1)) 
          }
        }
        //    if(tag.length<5){
        //      setTag();
        //      {tagId : "", name: ""}
        //    }
        //    else{
        //      alert("You can add only 5 tags")
        //    }
        //    console.log(newValue)
        //  }}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Tags"
            placeholder="Favorites"
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
    </>

  );
}

export default Ask;
