import React from "react";
import { Button, Grid, Typography } from "@mui/material";
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
      <Grid container spacing={3}>
        <Grid item xs={0.9}>
          {" "}
          {page === "profile" ? (
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                align="center"
                sx={{ color: "white", font: 10, borderRadius: "24px" }}
              >
                <Typography
                  variant="body2"
                  noWrap
                  component="div"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    color: "white",
                  }}
                  textTransform="capitalize"
                >
                  Profile
                </Typography>
              </Button>
            </ThemeProvider>
          ) : (
            <Button
              sx={{ color: "#757575", font: 10, borderRadius: "24px" }}
              onClick={profileClickHandler}
            >
              <Typography
                variant="body2"
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  color: "#525960",
                }}
                textTransform="capitalize"
              >
                Profile
              </Typography>
            </Button>
          )}
        </Grid>
        <Grid item xs={0.9}>
          {page === "activity" ? (
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                align="center"
                sx={{ color: "white", font: 10, borderRadius: "24px" }}
              >
                <Typography
                  variant="body2"
                  noWrap
                  component="div"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    color: "white",
                  }}
                  textTransform="capitalize"
                >
                  Activity
                </Typography>
              </Button>
            </ThemeProvider>
          ) : (
            <Button
              sx={{ color: "#757575", font: 10, borderRadius: "24px" }}
              onClick={activityClickHandler}
            >
              <Typography
                variant="body2"
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  color: "#525960",
                }}
                textTransform="capitalize"
              >
                Activity
              </Typography>
            </Button>
          )}
        </Grid>
        <Grid item xs={0.9}>
          {page === "editprofile" ? (
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  color: "white",
                  fontFamily:
                    '-apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif',
                  borderRadius: "24px",
                }}
              >
                <Typography
                  variant="body2"
                  noWrap
                  component="div"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    color: "white",
                  }}
                  textTransform="capitalize"
                >
                  Settings
                </Typography>
              </Button>
            </ThemeProvider>
          ) : (
            <Button
              sx={{
                color: "#757575",
                fontFamily:
                  '-apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif',
                borderRadius: "24px",
              }}
              onClick={updateProfileClickHandler}
            >
              <Typography
                variant="body2"
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  color: "#525960",
                }}
                textTransform="capitalize"
              >
                Settings
              </Typography>
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
