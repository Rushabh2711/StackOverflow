import React, { useEffect, useState } from "react";
import userJson from "../dummydata/user.json";
import UserDetails from "../components/UserProfile/UserDetails";
import UserProfileNavbar from "../components/UserProfile/UserProfileNavbar";
import { useSelector } from "react-redux";
import UserActivitySidebar from "../components/UserProfile/UserActivitySidebar";
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import UserAnswers from "../components/UserProfile/UserAnswers";
import validator from "validator";
import UserEditSidebar from "../components/UserProfile/UserEditSidebar";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router";

export default function UserEditProfile() {
  const [image, setImage] = useState("");
  const [user, setUser] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [about, setabout] = useState("");
  const [message, setMessage] = useState("");
  const { id } = useParams();
  let navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.LoggedInUser.userId);

  //city change handler to update state variable with the text entered by the user
  const cityChangeHandler = (e) => {
    setMessage("");
    setCity(e.target.value);
  };

  //country change handler to update state variable with the text entered by the user
  const countryChangeHandler = (e) => {
    setMessage("");
    setCountry(e.target.value);
  };

  //about change handler to update state variable with the text entered by the user
  const aboutChangeHandler = (e) => {
    setMessage("");
    setabout(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/user/` + id)
      .then((res) => {
        console.log(res.data);
        setUser(res.data[0]);
        console.log(res.data[0].city);
        console.log(res.data[0].country);
        setCity(res.data[0].location.city);
        setCountry(res.data[0].location.country);
        setabout(res.data[0].about);
      })
      .catch((err) => {
        console.log(err);
        navigate("/errorpage");
      });
    console.log(user.tags);
  }, []);

  const handleSubmit = (e) => {
    console.log("here");
    e.preventDefault();
    const data = {
      _id: id,
      city: city,
      about: about,
      country: country,
    };
    console.log(data);
    axios
      .put(`http://localhost:3001/user/editprofile`, data)
      .then((res) => {
        setMessage("Your profile has been updated");
        console.log(res);
      })
      .catch((err) => {
        setMessage(err.res.data);
      });
  };

  return loggedInUser === null || loggedInUser._id !== id ? (
    <Navigate to="/errorpage" />
  ) : (
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
          <Box sx={{ border: 1, width: 800 }}>
            <div>
              <Card
                style={{
                  border: 1,
                  width: 750,
                  height: 600,
                  marginLeft: "20px",
                }}
                align="left"
              >
                <h6>Profile Image</h6>
                <input type="file" name="myImage" />
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#212121",
                  }}
                  color="text.secondary"
                  align="left"
                  mt="4"
                  gutterBottom
                >
                  City
                </Typography>
                <TextField
                  id="city"
                  type="text"
                  value={city}
                  onChange={cityChangeHandler}
                  required
                  sx={{ width: 500 }}
                />
                <Typography
                  sx={{ fontSize: 16, fontWeight: "bold", color: "#212121" }}
                  color="text.secondary"
                  align="left"
                  gutterBottom
                >
                  Country
                </Typography>
                <TextField
                  id="country"
                  type="text"
                  value={country}
                  onChange={countryChangeHandler}
                  required
                  sx={{ width: 500 }}
                />
                <Typography
                  sx={{ fontSize: 16, fontWeight: "bold", color: "#212121" }}
                  color="text.secondary"
                  align="left"
                  gutterBottom
                >
                  About
                </Typography>
                <TextField
                  id="about"
                  type="text"
                  value={about}
                  onChange={aboutChangeHandler}
                  multiline
                  rows={4}
                  required
                  sx={{ width: 700 }}
                  mb="3"
                />
                &nbsp;
                <Button
                  sx={{ fontSize: 15, width: 150, color: "#fafafa", mt: 4 }}
                  variant="contained"
                  onClick={handleSubmit}
                >
                  Save profile
                </Button>
                <Typography
                  sx={{
                    fontSize: 16,
                    color: "#212121",
                    fontWeight: "bold",
                    m: "2",
                  }}
                  color="text.secondary"
                  gutterBottom
                >
                  {message}
                </Typography>
              </Card>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
