import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import toppostsJson from "../../dummydata/toppost.json";

export default function UserTopPosts(props) {
  const { user } = props;
  const { type } = props;
  const [topposts, setTopPosts] = useState(toppostsJson);

  useEffect(() => {}, []);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={11}>
          {type === "posts" ? (
            <Typography
              sx={{ fontSize: 20, color: "#212121", align: "left" }}
              color="text.secondary"
              gutterBottom
              align="left"
            >
              Top Posts
            </Typography>
          ) : type === "questions" ? (
            <Typography
              sx={{ fontSize: 20, color: "#212121", align: "left" }}
              color="text.secondary"
              gutterBottom
              align="left"
            >
              Top Questions
            </Typography>
          ) : (
            <Typography
              sx={{ fontSize: 20, color: "#212121", align: "left" }}
              color="text.secondary"
              gutterBottom
              align="left"
            >
              Top Answers
            </Typography>
          )}
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {topposts.slice(0, 6).map((post) => (
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
