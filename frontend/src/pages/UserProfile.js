import React, { useEffect, useState } from "react";
import userJson from "../dummydata/user.json";
import UserDetails from "../components/UserProfile/UserDetails";
import UserProfileNavbar from "../components/UserProfile/UserProfileNavbar";
import UserStats from "../components/UserProfile/UserStats";
import UserAbout from "../components/UserProfile/UserAbout";
import { Grid, Typography } from "@mui/material";
import UserBadges from "../components/UserProfile/UserBadges";
import UserTopTags from "../components/UserProfile/UserTopTags";
import UserTopPosts from "../components/UserProfile/UserTopPosts";
import toppostsJson from "../dummydata/toppost.json";

export default function UserProfile() {
  const [user, setUser] = useState(userJson.userData);

  const [posts, setPosts] = useState(toppostsJson);

  useEffect(() => {
    setUser(userJson.userData);
  }, []);

  return (
    <div>
      <div className="userprofile-details-component">
        <UserDetails user={user}></UserDetails>
      </div>
      <div className="userprofile-navbar-component">
        <UserProfileNavbar page={"profile"} user={user}></UserProfileNavbar>
      </div>
      <br></br>
      <Grid container spacing={0}>
        <Grid item xs={2.75}>
          {" "}
          <div className="userprofile-stats-component">
            <UserStats user={user}></UserStats>
          </div>
        </Grid>
        <Grid item xs={8}>
          {" "}
          <div className="userprofile-about-component">
            <UserAbout user={user}></UserAbout>
          </div>
          <br></br>
          <div className="userprofile-badges-component">
            <UserBadges user={user}></UserBadges>
          </div>
          <div className="userprofile-toptags-component">
            <Typography
              sx={{ fontSize: 20, color: "#212121", align: "left" }}
              color="text.secondary"
              gutterBottom
              align="left"
            >
              Top tags
            </Typography>
            <UserTopTags user={user} length={6}></UserTopTags>
          </div>
          <div className="userprofile-topposts-component">
            <UserTopPosts user={user}></UserTopPosts>
          </div>
        </Grid>
      </Grid>

      <div></div>
    </div>
  );
}
