import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Chip, Grid, ListItemText, Stack } from "@mui/material";
import DoneSharpIcon from "@mui/icons-material/DoneSharp";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import { useParams } from "react-router";
import axios from "axios";
import questionsJson from "../../dummydata/questions.json";

export default function UserAnswers(props) {
  const { id } = useParams();
  const [answers, setAnswers] = useState(questionsJson);

  useEffect(() => {
    console.log(id);
    // axios.get("http://localhost:3001/user/questions/" + id).then((response) => {
    //   setAnswers(response.data);
    // });
    console.log(answers);
  }, []);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={11}>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {answers !== "" ? (
              answers.questions.map((question) => (
                <ListItem sx={{ border: 1, borderColor: "#e0e0e0" }}>
                  <ListItemText
                    primary={
                      <div>
                        <div>
                          {question.upvotes - question.downvotes} votes{" "}
                          {question.correct_answer != null ? (
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
                              Accepted{" "}
                            </Box>
                          ) : (
                            <di></di>
                          )}
                        </div>
                        <div>{question.title}</div>
                        <div>
                          <Grid container spacing={2}>
                            <Grid item xs={9}>
                              <Stack direction="row" spacing={1}>
                                {question.tags.map((tag) => (
                                  <Chip label={tag.name} />
                                ))}{" "}
                              </Stack>
                            </Grid>
                            <Grid item xs={3} style={{ float: "right" }}>
                              answered {question.addedAt}
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
    </div>
  );
}
