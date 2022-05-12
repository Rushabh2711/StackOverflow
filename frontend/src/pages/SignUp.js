import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Helmet } from "react-helmet";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import validator from "validator";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../actions";
import { useNavigate } from "react-router";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const usernameChangeHandler = (e) => {
    setMessage("");
    setUsername(e.target.value);
  };

  //email change handler to update state variable with the text entered by the user
  const emailIdChangeHandler = (e) => {
    setMessage("");
    setEmailId(e.target.value);
  };

  //password change handler to update state variable with the text entered by the user
  const passwordChangeHandler = (e) => {
    setMessage("");
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validator.isAlphanumeric(username)) {
      setMessage("Username can have only letter and number");
    } else if (!validator.isEmail(emailId)) {
      setMessage("Please enter a valid email address");
    } else if (!validator.isStrongPassword(password)) {
      setMessage("Password entered is not strong enough");
    } else {
      const data = {
        username: username,
        emailId: emailId,
        password: password,
      };
      axios
        .post(`http://localhost:3001/user/signup`, data)
        .then((res) => {
          console.log("Status Code : ", res.status);
          if (res.data === "Email already in use") {
            setMessage("Email already in use");
          } else {
            console.log(res.data);
            dispatch(login(res.data));
            navigate("/home");
          }
        })
        .catch((err) => {
          setMessage(err.res.data);
        });
    }
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography
          sx={{ fontSize: 20, fontWeight: "bold", color: "#212121" }}
          color="text.secondary"
          align="left"
          gutterBottom
        >
          Display Name
        </Typography>
        <TextField
          id="username"
          value={username}
          onChange={usernameChangeHandler}
          required
          sx={{ width: 320 }}
        />
        <Typography
          sx={{ fontSize: 20, fontWeight: "bold", color: "#212121" }}
          color="text.secondary"
          align="left"
          gutterBottom
        >
          Email
        </Typography>
        <TextField
          id="emailId"
          type="email"
          value={emailId}
          onChange={emailIdChangeHandler}
          required
          sx={{ width: 320 }}
        />
        <Typography
          sx={{ fontSize: 20, fontWeight: "bold", color: "#212121" }}
          color="text.secondary"
          align="left"
          gutterBottom
        >
          Password
        </Typography>
        <TextField
          id="password"
          type="password"
          value={password}
          onChange={passwordChangeHandler}
          required
          sx={{ width: 320 }}
        />
        <Typography
          sx={{ fontSize: 13, color: "#212121" }}
          color="text.secondary"
          gutterBottom
        >
          Password must contain at least 8 characters, include uppercase,
          lowercase, number and symbol.
        </Typography>
        &nbsp;
        <Button
          sx={{ fontSize: 20, width: 320, color: "#fafafa", mb: "2" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <Typography
          sx={{ fontSize: 16, color: "#212121", fontWeight: "bold", m: "2" }}
          color="text.secondary"
          gutterBottom
        >
          {message}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <div className="signup-component">
      <Helmet>
        <style>{"body { background-color: #eeeeee }"}</style>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <img
            src="/images/signup.JPG"
            style={{
              position: "sticky",
              height: "450px",
              width: "500px",
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ width: 350 }} align="right">
            <Card variant="outlined">{card}</Card>
          </Box>
          <div align="center">
            Already have an account? <Link to={`/login`}>Log in</Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
