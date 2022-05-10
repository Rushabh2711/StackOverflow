import React from "react";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function UserActivitySidebar(props) {
  const { tab } = props;
  const { user } = props;
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#eeeeee",
      },
    },
  });

  const answersClickHandler = (e) => {
    navigate("/users/activity/answers/" + user.user_id);
  };

  const questionsClickHandler = (e) => {
    navigate("/users/activity/questions/" + user.user_id);
  };

  const tagsClickHandler = (e) => {
    navigate("/users/activity/tags/" + user.user_id);
  };

  const badgesClickHandler = (e) => {
    navigate("/users/activity/badges/" + user.user_id);
  };

  const bookmarksClickHandler = (e) => {
    navigate("/users/activity/bookmarks/" + user.user_id);
  };

  const reputationClickHandler = (e) => {
    navigate("/users/activity/reputation/" + user.user_id);
  };

  return (
    <div className="useractivity-sidebar-component">
      {" "}
      {tab === "answers" ? (
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            align="center"
            sx={{ color: "#424242", font: 20, width: 200 }}
          >
            Answers
          </Button>
        </ThemeProvider>
      ) : (
        <Button
          sx={{ color: "#757575", width: 200, font: 20 }}
          onClick={answersClickHandler}
        >
          Answers
        </Button>
      )}
      <br></br>
      {tab === "questions" ? (
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            align="center"
            sx={{ color: "#424242", width: 200, font: 20 }}
          >
            Questions
          </Button>
        </ThemeProvider>
      ) : (
        <Button
          sx={{ color: "#757575", width: 200, font: 20 }}
          onClick={questionsClickHandler}
        >
          Questions
        </Button>
      )}
      <br></br>
      {tab === "tags" ? (
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            align="center"
            sx={{ color: "#424242", width: 200, font: 20 }}
          >
            Tags
          </Button>
        </ThemeProvider>
      ) : (
        <Button
          sx={{ color: "#757575", width: 200, font: 20 }}
          onClick={tagsClickHandler}
        >
          Tags
        </Button>
      )}
      <br></br>
      {tab === "bookmarks" ? (
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            align="center"
            sx={{ color: "#424242", width: 200, font: 20 }}
          >
            Bookmarks
          </Button>
        </ThemeProvider>
      ) : (
        <Button
          sx={{ color: "#757575", width: 200, font: 20 }}
          onClick={bookmarksClickHandler}
        >
          Bookmarks
        </Button>
      )}
      <br></br>
      {tab === "badges" ? (
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            align="center"
            sx={{ color: "#424242", width: 200, font: 20 }}
          >
            Badges
          </Button>
        </ThemeProvider>
      ) : (
        <Button
          sx={{ color: "#757575", width: 200, font: 20 }}
          onClick={badgesClickHandler}
        >
          Badges
        </Button>
      )}
      <br></br>
      {tab === "reputation" ? (
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            align="center"
            sx={{ color: "#424242", width: 200, font: 20 }}
          >
            Reputation
          </Button>
        </ThemeProvider>
      ) : (
        <Button
          sx={{ color: "#757575", width: 200, font: 20 }}
          onClick={reputationClickHandler}
        >
          Reputation
        </Button>
      )}
    </div>
  );
}
