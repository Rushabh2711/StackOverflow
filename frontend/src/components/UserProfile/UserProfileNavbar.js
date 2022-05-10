import React from "react";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function UserProfileNavbar(props) {
  const { page } = props;
  const { user } = props;
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fb8c00",
      },
    },
  });

  const activityClickHandler = (e) => {
    navigate("/users/activity/answers/" + user.user_id);
  };

  const profileClickHandler = (e) => {
    navigate("/users/profile/" + user.user_id);
  };

  const updateProfileClickHandler = (e) => {
    navigate("/users/editprofile/" + user.user_id);
  };

  return (
    <div className="userprofile-details-component">
      <Grid container spacing={0}>
        <Grid item xs={1.1}>
          {" "}
          {page === "profile" ? (
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                align="center"
                sx={{ color: "white", font: 20 }}
              >
                Profile
              </Button>
            </ThemeProvider>
          ) : (
            <Button
              sx={{ color: "#757575", font: 20 }}
              onClick={profileClickHandler}
            >
              Profile
            </Button>
          )}
        </Grid>
        <Grid item xs={0.7}>
          {page === "activity" ? (
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                align="center"
                sx={{ color: "white", font: 20 }}
              >
                Activity
              </Button>
            </ThemeProvider>
          ) : (
            <Button
              sx={{ color: "#757575", font: 20 }}
              onClick={activityClickHandler}
            >
              Activity
            </Button>
          )}
        </Grid>
        <Grid item xs={1.3}>
          {page === "editprofile" ? (
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                align="center"
                sx={{ color: "white", font: 20 }}
              >
                Settings
              </Button>
            </ThemeProvider>
          ) : (
            <Button
              sx={{ color: "#757575", font: 20 }}
              onClick={updateProfileClickHandler}
            >
              Settings
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
