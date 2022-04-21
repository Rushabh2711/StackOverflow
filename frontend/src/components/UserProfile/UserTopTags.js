import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import CircleIcon from "@mui/icons-material/Circle";
import usertaginfo from "../../dummydata/usertaginfo.json";

export default function UserTopTags(props) {
  const { user } = props;
  const [tags, setTags] = useState(usertaginfo);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={11}>
          <Typography
            sx={{ fontSize: 20, color: "#212121", align: "left" }}
            color="text.secondary"
            gutterBottom
            align="left"
          >
            Top tags
          </Typography>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {tags.slice(0, 6).map((tag) => (
              <ListItem sx={{ border: 1, borderColor: "#e0e0e0" }}>
                <Grid container spacing={0}>
                  <Grid item xs={9}>
                    <Box
                      component="div"
                      sx={{
                        bgcolor: "#eeeeee",
                        border: 1,
                        borderColor: "#bdbdbd",
                        color: "#757575",
                        fontSize: 15,
                        width: 100,
                        mb: 1,
                      }}
                    >
                      {tag.tagName}
                    </Box>
                  </Grid>
                  <Grid item xs={3} style={{ display: "flex" }}>
                    <Typography
                      sx={{ fontSize: 18, color: "#212121" }}
                      color="text.secondary"
                      align="left"
                      gutterBottom
                    >
                      {tag.score} {"    "}
                    </Typography>{" "}
                    <Typography
                      sx={{ fontSize: 15, color: "#212121" }}
                      color="text.secondary"
                      align="left"
                      gutterBottom
                    >
                      &nbsp;
                    </Typography>
                    <Typography
                      sx={{ fontSize: 15, color: "#616161" }}
                      color="text.secondary"
                      align="left"
                      gutterBottom
                    >
                      score {"    "}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 15, color: "#212121" }}
                      color="text.secondary"
                      align="left"
                      gutterBottom
                    >
                      &nbsp; &nbsp;
                    </Typography>
                    <Typography
                      sx={{ fontSize: 18, color: "#212121" }}
                      color="text.secondary"
                      align="left"
                      gutterBottom
                    >
                      {tag.posts}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 15, color: "#212121" }}
                      color="text.secondary"
                      align="left"
                      gutterBottom
                    >
                      &nbsp; &nbsp;
                    </Typography>
                    <Typography
                      sx={{ fontSize: 15, color: "#616161" }}
                      color="text.secondary"
                      align="left"
                      gutterBottom
                    >
                      posts
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
