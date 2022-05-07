import React, { useEffect, useState } from "react";
import userJson from "../dummydata/user.json";
import UserDetails from "../components/UserProfile/UserDetails";
import UserProfileNavbar from "../components/UserProfile/UserProfileNavbar";
import UserActivitySidebar from "../components/UserProfile/UserActivitySidebar";
import { Grid, Typography } from "@mui/material";
import UserQuestions from "../components/UserProfile/UserQuestions";

export default function UserActivityQuestions() {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(userJson.userData);
  }, []);

  return (
    <div>
      <div className="userprofile-details-component">
        <UserDetails user={user}></UserDetails>
      </div>
      <div>
        <UserProfileNavbar page={"activity"} user={user}></UserProfileNavbar>
      </div>
      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          {" "}
          <UserActivitySidebar
            tab={"questions"}
            user={user}
          ></UserActivitySidebar>
        </Grid>
        <Grid item xs={9}>
          {" "}
          <Typography
            sx={{ fontSize: 20, color: "#212121", align: "left" }}
            color="text.secondary"
            gutterBottom
            align="left"
          >
            Questions
          </Typography>
          <UserQuestions></UserQuestions>
        </Grid>
      </Grid>
    </div>
  );
}
