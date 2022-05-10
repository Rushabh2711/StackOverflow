import React, { useEffect, useState } from "react";
import userJson from "../dummydata/user.json";
import UserDetails from "../components/UserProfile/UserDetails";
import UserProfileNavbar from "../components/UserProfile/UserProfileNavbar";
import UserActivitySidebar from "../components/UserProfile/UserActivitySidebar";
import UserBookmarks from "../components/UserProfile/UserBookmarks";
import { Grid, Typography } from "@mui/material";

export default function UserActivityBookmarks() {
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
            tab={"bookmarks"}
            user={user}
          ></UserActivitySidebar>
        </Grid>
        <Grid item xs={8}>
          {" "}
          <Typography
            sx={{ fontSize: 20, color: "#212121", align: "left" }}
            color="text.secondary"
            gutterBottom
            align="left"
          >
            Bookmarks
          </Typography>
          <UserBookmarks></UserBookmarks>
        </Grid>
      </Grid>
    </div>
  );
}
