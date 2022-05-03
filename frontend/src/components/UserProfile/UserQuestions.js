import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Chip, Grid, ListItemText, Stack } from "@mui/material";
import DoneSharpIcon from "@mui/icons-material/DoneSharp";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import questionsJson from "../../dummydata/questions.json";

export default function UserQuestions(props) {
  const [questions, setQuestions] = useState(questionsJson);
  useEffect(() => {}, []);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={11}>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {questions.questions.map((question) => (
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
                        &nbsp;{question.number_of_views} views
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
                            asked {question.addedAt}
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
}
