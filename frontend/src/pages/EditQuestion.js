import React, { useEffect, useState } from "react";
import { TextField,  Autocomplete } from '@mui/material';
import QuillEditor from "../components/Questions/Editor";
import { useParams } from "react-router-dom";
import { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6
import "../components/Questions/index.css";
import axios from "axios";
//import { TagsInput } from "react-tag-input-component";
// import { selectUser } from "../../feature/userSlice";
// import ChipsArray from "./TagsInput";
import ImageUploader from "quill-image-uploader";
import Navbar from "../components/Navbar/Navbar";
//import ImageResize from "quill-image-resize-module-react";
// #2 register module
Quill.register("modules/imageUploader", ImageUploader);
function Edit() {
  //const user = useSelector(selectUser);
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState([]);
  const [isAdmin, setisAdmin] = useState(false);
  const [tagList, setTagList] = useState([]);
  const [shortDesc, setShortDesc] = useState("");

  useEffect(() => {
    console.log("inside")
    axios
      .get(`http://localhost:3001/tags`)
      .then((res) => {
        setTagList(res.data)
        // console.log("response",res.data) 
      })
      .catch((err) => console.log(err));
    console.log("data", tagList)
  }, [id]);
  useEffect(() => {
    console.log("inside")
    axios
      .get(`http://localhost:3001/questions/${id}`)
      .then((res) => {
        console.log("question", res.data.response);
        var taglist = res.data.response.tags;
        setTagsState2(taglist)
        // setTag(res.data.response.tags)
        setTitle(res.data.response.questionTitle)
        setBody(res.data.response.description)
      })
      .catch((err) => console.log(err));
    if (localStorage.getItem("userType") === "admin") {
      setisAdmin(true)
    }
  }, [id, isAdmin]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("title", title)
    console.log("body", body)
    const transformed = tag.map(({ _id, name }) => ({
      tagId: _id,
      name: name,
    }));
    console.log("all tasg", transformed)
    console.log("tag", tag)
    if (title !== "" && body !== "") {
      const bodyJSON = {
        title: title,
        description: body,
        tags: transformed,
        postId: id,
        type: "modified",
        isAdmin: isAdmin,
        userId: "62763e26bfe0a2faeddf026c",//localStorage.getItem('userId')
        username: "virag"//localStorage.getItem('username')
        // user: user,
      };
      await axios
        .post("http://localhost:3001/questions/edit", bodyJSON)
        .then((res) => {
          console.log(res.data);
          alert("Question added successfully");
          //history.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else if(title===""){
      alert("Title can not be empty")
    }
    else if(body===""){
      alert("Description can not be empty")
    }
  };

  const setTagsState2 = (tagObj) => {
    tagObj.forEach(object => {
      delete object['_id'];
    });
    const transformed = tagObj.map(({ tagId, name }) => ({
      _id: tagId,
      name: name,
      // description:""
    }));
    console.log("all tasg", transformed)
    setTag(transformed)
  };

  // const setTagsState = (tagObj) => {
  //   setTag(arr => [...arr, { tagId: tagObj._id, name: tagObj.name }])
  // };


  return (
    <>
      <Navbar />
      <div className="add-question">
        <div className="add-question-container">
          <div className="head-title">
            <h1>Edit a public question</h1>
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
                value={tag}
                onChange={(event, tags) => {
                  console.log(event);
                  console.log(tags);
                  if(tag.length<5){
                    //setTag();
                    setTag(tags)
                  }
                  else{
                    alert("You can add only 5 tags")
                  }
                  // setTagsState(tags.at(-1))
                }
                }
                   
                   
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
            {isAdmin?"Approve":"Update"}
          </button>
        </div>
      </div>
    </>

  );
}

export default Edit;
