import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Chip, Grid, ListItemText, Stack } from "@mui/material";
import DoneSharpIcon from "@mui/icons-material/DoneSharp";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import { useParams } from "react-router";
import axios from "axios";
import Moment from "react-moment";

export default function UserQuestions(props) {
  const { id } = useParams();
  const [questions, setQuestions] = useState("");
  useEffect(() => {
    console.log(id);
    axios.get("http://localhost:3001/user/questions/" + id).then((response) => {
      setQuestions(response.data.filter((x) => x.postType === "question"));
    });
    console.log(questions);
  }, []);

  return (
    <div>
      {questions === "" || questions.length === 0 ? (
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          <ListItem
            sx={{
              border: 1,
              borderColor: "#bdbdbd",
              bgcolor: "#eeeeee",
            }}
          >
            {" "}
            <Typography
              sx={{ fontSize: 13, color: "#212121", align: "left" }}
              color="text.secondary"
              gutterBottom
              align="left"
            >
              You currently have asked no questions
            </Typography>
          </ListItem>
        </List>
      ) : (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              {questions !== "" ? (
                questions.map((question) => (
                  <ListItem sx={{ border: 1, borderColor: "#e0e0e0" }}>
                    <ListItemText
                      primary={
                        <div>
                          <div>
                            {question.votes} votes{" "}
                            {question.isAcceptedAnswerId !== undefined ? (
                              <Box
                                component="div"
                                sx={{
                                  display: "inline",
                                  bgcolor: "#5fa463",
                                  border: 1,
                                  borderColor: "#5fa463",
                                  color: "white",
                                }}
                              >
                                <DoneSharpIcon />
                                {question.numberOfAnswers} answers{" "}
                              </Box>
                            ) : question.numberOfAnswers > 0 ? (
                              <Box
                                component="div"
                                sx={{
                                  display: "inline",
                                  bgcolor: "white",
                                  border: 1,
                                  borderColor: "#5fa463",
                                  color: "#5fa463",
                                }}
                              >
                                {question.numberOfAnswers} answers{" "}
                              </Box>
                            ) : (
                              <Box
                                component="div"
                                sx={{
                                  display: "inline",
                                  bgcolor: "white",
                                }}
                              >
                                {question.numberOfAnswers} answers{" "}
                              </Box>
                            )}
                            &nbsp;{question.views} views
                          </div>
                          <div>{question.questionTitle}</div>
                          <div>
                            <Grid container spacing={2}>
                              <Grid item xs={9}>
                                <Stack direction="row" spacing={1}>
                                  {question.tags === undefined ? (
                                    <div></div>
                                  ) : (
                                    question.tags.map((tag) => (
                                      <Chip label={tag.name} />
                                    ))
                                  )}{" "}
                                </Stack>
                              </Grid>
                              <Grid item xs={3} style={{ float: "right" }}>
                                {new Date(question.addedAt).getTime() >
                                new Date().getTime() ? (
                                  <div>
                                    asked{" "}
                                    <Moment fromNow>{question.addedAt}</Moment>
                                  </div>
                                ) : new Date(question.addedAt).getTime() >
                                  new Date("01/01/2022").getTime() ? (
                                  <div>
                                    asked{" "}
                                    <Moment format=" MMM D">
                                      {question.addedAt}
                                    </Moment>
                                  </div>
                                ) : (
                                  <div>
                                    {" "}
                                    asked{" "}
                                    <Moment format=" MMM D, YYYY">
                                      {question.addedAt}
                                    </Moment>
                                  </div>
                                )}
                              </Grid>
                            </Grid>
                          </div>
                        </div>
                      }
                    />
                  </ListItem>
                ))
              ) : (
                <div></div>
              )}
            </List>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
