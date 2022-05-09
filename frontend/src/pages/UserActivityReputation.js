import React, { useEffect, useState } from "react";
import userJson from "../dummydata/user.json";
import UserDetails from "../components/UserProfile/UserDetails";
import UserProfileNavbar from "../components/UserProfile/UserProfileNavbar";
import UserActivitySidebar from "../components/UserProfile/UserActivitySidebar";
import { Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

export default function UserActivityReputation() {
  const [user, setUser] = useState("");

  const { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/user/` + id)
      .then((res) => {
        console.log(res.data);
        setUser(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
        navigate("/errorpage");
      });
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
            tab={"reputation"}
            user={user}
          ></UserActivitySidebar>
        </Grid>
      </Grid>
    </div>
  );
}
