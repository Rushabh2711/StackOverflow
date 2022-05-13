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
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import validator from "validator";
import { login } from "../actions";
import { Navigate, useNavigate } from "react-router";

export default function Login() {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const loggedInUser = useSelector((state) => state.LoggedInUser);
  // const loggedInUser = useSelector((state) => state.LoggedInUser);

  const dispatch = useDispatch();
  let navigate = useNavigate();

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
    if (!validator.isEmail(emailId)) {
      setMessage("Please enter a valid email address");
    } else if (!validator.isStrongPassword(password)) {
      setMessage("Password is not correct");
    } else {
      const data = {
        emailId: emailId,
        password: password,
      };
      axios
        .post(`http://localhost:3001/user/login`, data)
        .then((response) => {
          console.log("Status Code : ", response.status);
          console.log(response.data);
          dispatch(login(response.data));
          navigate("/home");
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data.errorMsg);
          setMessage(error.response.data.errorMsg);
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
        &nbsp;
        <Button
          sx={{ fontSize: 20, width: 320, color: "#fafafa" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Log in
        </Button>
        <Typography
          sx={{ fontSize: 16, color: "#212121", fontWeight: "bold", mt: "2" }}
          color="text.secondary"
          gutterBottom
        >
          {message}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return loggedInUser !== 0 ? (
    <Navigate to="/home" />
  ) : (
    <div className="login-component">
      <Helmet>
        <style>{"body { background-color: #eeeeee }"}</style>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item xs={4}></Grid>
        <Grid item xs={3}>
          &nbsp;
          <Box sx={{ width: 350 }}>
            <Card variant="outlined">{card}</Card>
          </Box>
          <br></br>
          <div align="center">
            Don’t have an account? <Link to={`/signup`}>Sign up</Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
