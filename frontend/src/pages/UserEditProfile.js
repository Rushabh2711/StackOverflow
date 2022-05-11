import React, { useEffect, useState } from "react";
import userJson from "../dummydata/user.json";
import UserDetails from "../components/UserProfile/UserDetails";
import UserProfileNavbar from "../components/UserProfile/UserProfileNavbar";
import UserActivitySidebar from "../components/UserProfile/UserActivitySidebar";
import { Box, Card, Divider, Grid, Typography } from "@mui/material";
import UserAnswers from "../components/UserProfile/UserAnswers";
import UserEditSidebar from "../components/UserProfile/UserEditSidebar";

export default function UserEditProfile() {
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [user, setUser] = useState(userJson.userData);

  useEffect(() => {
    setUser(userJson.userData);
  }, []);

  return (
    <div>
      <div className="userprofile-details-component">
        <UserDetails user={user}></UserDetails>
      </div>
      <div>
        <UserProfileNavbar page={"editprofile"} user={user}></UserProfileNavbar>
      </div>
      <br></br>
      <Grid container spacing={0}>
        <Grid item xs={2.5}>
          {" "}
          <UserEditSidebar user={user}></UserEditSidebar>
        </Grid>

        <Grid item xs={9}>
          {" "}
          <Typography
            sx={{ fontSize: 25, color: "#212121", align: "left" }}
            color="text.secondary"
            gutterBottom
            align="left"
          >
            Edit Your Profile
          </Typography>
          <Divider light />
          &nbsp;
          <Typography
            sx={{ fontSize: 20, color: "#212121", align: "left" }}
            color="text.secondary"
            gutterBottom
            align="left"
          >
            Public Information
          </Typography>
          <Box sx={{ border: 1 }}>
            <div>
              <Card style={{ width: 200, height: 200 }}>
                <img
                  src={
                    image
                      ? image
                      : "https://firebasestorage.googleapis.com/v0/b/etsy-lab1.appspot.com/o/blank-profile-picture-973460_1280.png?alt=media&token=7127f000-8f23-447d-8587-e7a803ee957e"
                  }
                  className="card-img-top"
                  alt="description of image"
                />
                <h6>Profile Image</h6>
                <input type="file" name="myImage" />
              </Card>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
