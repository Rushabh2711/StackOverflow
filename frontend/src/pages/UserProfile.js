import React, { useEffect, useState } from "react";
import userJson from "../dummydata/user.json";
import UserDetails from "../components/UserProfile/UserDetails";
import UserProfileNavbar from "../components/UserProfile/UserProfileNavbar";
import UserStats from "../components/UserProfile/UserStats";
import UserAbout from "../components/UserProfile/UserAbout";
import { Grid } from "@mui/material";
import UserBadges from "../components/UserProfile/UserBadges";
import UserTopTags from "../components/UserProfile/UserTopTags";
import UserTopPosts from "../components/UserProfile/UserTopPosts";

export default function UserProfile() {
  const [user, setUser] = useState(userJson.userData);

  useEffect(() => {
    setUser(userJson.userData);
    console.log(user);
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
            <UserTopTags user={user}></UserTopTags>
          </div>
          <div className="userprofile-topposts-component">
            <UserTopPosts user={user} type={"posts"}></UserTopPosts>
          </div>
        </Grid>
      </Grid>

      <div></div>
    </div>
  );
}
