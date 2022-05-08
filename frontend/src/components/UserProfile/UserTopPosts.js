import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import toppostsJson from "../../dummydata/toppost.json";

export default function UserTopPosts() {
  const [topposts, setTopPosts] = useState(toppostsJson);
  const [answers, setAnswers] = useState("");
  const [questions, setQuestions] = useState("");
  const [postType, setPostType] = useState("all");
  const [filterType, setFilterType] = useState("score");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(
      topposts.sort(
        (a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
      )
    );
  }, []);

  useEffect(() => {
    if (postType === "all") {
      if (filterType === "score") {
        setPosts(
          topposts.sort(
            (a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
          )
        );
      } else if (filterType === "newest") {
        setPosts(topposts.sort((a, b) => a.addedAt - b.addedAt));
      }
    } else if (postType === "questions") {
      if (filterType === "score") {
        setPosts(
          topposts
            .filter((x) => x.postType === "question")
            .sort((a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes))
        );
      } else if (filterType === "newest") {
        setPosts(
          topposts
            .filter((x) => x.postType === "question")
            .sort((a, b) => a.addedAt - b.addedAt)
        );
      }
    } else if (postType === "answers") {
      if (filterType === "score") {
        setPosts(
          topposts
            .filter((x) => x.postType === "answer")
            .sort((a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes))
        );
      } else if (filterType === "newest") {
        setPosts(
          topposts
            .filter((x) => x.postType === "answer")
            .sort((a, b) => a.addedAt - b.addedAt)
        );
      }
    }
  }, [postType, filterType]);

  const allClickHandler = (e) => {
    setPostType("all");
  };
  const questionsClickHandler = (e) => {
    setPostType("questions");
  };
  const answersClickHandler = (e) => {
    setPostType("answers");
  };
  const scoreClickHandler = (e) => {
    setFilterType("score");
  };
  const newestClickHandler = (e) => {
    setFilterType("newest");
  };
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={5}>
              {postType === "all" && filterType === "score" ? (
                <Typography
                  sx={{ fontSize: 20, color: "#212121", align: "left" }}
                  color="text.secondary"
                  gutterBottom
                  align="left"
                >
                  Top Posts
                </Typography>
              ) : postType === "all" && filterType === "newest" ? (
                <Typography
                  sx={{ fontSize: 20, color: "#212121", align: "left" }}
                  color="text.secondary"
                  gutterBottom
                  align="left"
                >
                  Newest Posts
                </Typography>
              ) : postType === "questions" && filterType === "score" ? (
                <Typography
                  sx={{ fontSize: 20, color: "#212121", align: "left" }}
                  color="text.secondary"
                  gutterBottom
                  align="left"
                >
                  Top Questions
                </Typography>
              ) : postType === "questions" && filterType === "newest" ? (
                <Typography
                  sx={{ fontSize: 20, color: "#212121", align: "left" }}
                  color="text.secondary"
                  gutterBottom
                  align="left"
                >
                  Newest Questions
                </Typography>
              ) : postType === "answers" && filterType === "score" ? (
                <Typography
                  sx={{ fontSize: 20, color: "#212121", align: "left" }}
                  color="text.secondary"
                  gutterBottom
                  align="left"
                >
                  Top Answers
                </Typography>
              ) : (
                <Typography
                  sx={{ fontSize: 20, color: "#212121", align: "left" }}
                  color="text.secondary"
                  gutterBottom
                  align="left"
                >
                  Newest Answers
                </Typography>
              )}
            </Grid>
            <Grid item xs={4}>
              <div class="btn-group mr-2" role="group" aria-label="First group">
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={allClickHandler}
                >
                  All
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={questionsClickHandler}
                >
                  Questions
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={answersClickHandler}
                >
                  Answers
                </button>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div class="btn-group mr-2" role="group" aria-label="First group">
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={scoreClickHandler}
                >
                  Score
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={newestClickHandler}
                >
                  Newest
                </button>
              </div>
            </Grid>
          </Grid>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {posts.slice(0, 10).map((post) => (
              <ListItem sx={{ border: 1, borderColor: "#e0e0e0" }}>
                <Grid container spacing={0}>
                  <Grid item xs={0.5}>
                    {post.postType === "answer" && post.isBest === true ? (
                      <Box
                        component="div"
                        sx={{
                          bgcolor: "#689f38",
                          border: 1,
                          borderColor: "#689f38",
                          color: "white",
                          fontSize: 15,
                          m: 0.5,
                        }}
                      >
                        A
                      </Box>
                    ) : post.postType === "answer" ? (
                      <Box
                        component="div"
                        sx={{
                          bgcolor: "#eeeeee",
                          border: 1,
                          borderColor: "#bdbdbd",
                          color: "#757575",
                          fontSize: 15,
                          m: 0.5,
                        }}
                      >
                        A
                      </Box>
                    ) : (
                      <Box
                        component="div"
                        sx={{
                          bgcolor: "#689f38",
                          border: 1,
                          borderColor: "#689f38",
                          color: "white",
                          fontSize: 15,
                          m: 0.5,
                        }}
                      >
                        Q
                      </Box>
                    )}
                  </Grid>
                  <Grid item xs={0.5}>
                    {(post.postType === "answer" && post.isBest === true) ||
                    post.postType === "question" ? (
                      <Box
                        component="div"
                        sx={{
                          bgcolor: "#689f38",
                          border: 1,
                          borderColor: "#689f38",
                          color: "white",
                          fontSize: 18,
                          m: 0.5,
                        }}
                      >
                        {post.upvotes - post.downvotes}
                      </Box>
                    ) : (
                      <Box
                        component="div"
                        sx={{
                          bgcolor: "white",
                          border: 1,
                          borderColor: "#bdbdbd",
                          color: "#424242",
                          fontSize: 18,
                          m: 0.5,
                        }}
                      >
                        {post.upvotes - post.downvotes}
                      </Box>
                    )}
                  </Grid>
                  <Grid item xs={9}>
                    <Typography
                      color="text.primary"
                      align="left"
                      sx={{ fontSize: 15, color: "#212121" }}
                      gutterBottom
                    >
                      {post.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      color="text.primary"
                      align="left"
                      sx={{ fontSize: 15, color: "#212121" }}
                      gutterBottom
                    >
                      {post.addedAt}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
}
