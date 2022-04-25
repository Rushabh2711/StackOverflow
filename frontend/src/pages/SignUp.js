import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Helmet } from "react-helmet";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function SignUp() {
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
        <TextField id="basic" sx={{ width: 320 }} />
        <Typography
          sx={{ fontSize: 20, fontWeight: "bold", color: "#212121" }}
          color="text.secondary"
          align="left"
          gutterBottom
        >
          Email
        </Typography>
        <TextField id="basic" sx={{ width: 320 }} />
        <Typography
          sx={{ fontSize: 20, fontWeight: "bold", color: "#212121" }}
          color="text.secondary"
          align="left"
          gutterBottom
        >
          Password
        </Typography>
        <TextField id="basic" sx={{ width: 320 }} />
        <Typography
          sx={{ fontSize: 13, color: "#212121" }}
          color="text.secondary"
          gutterBottom
        >
          Passwords must contain at least eight characters, including at least 1
          letter and 1 number.
        </Typography>
        &nbsp;
        <Button
          sx={{ fontSize: 20, width: 320, color: "#fafafa" }}
          variant="contained"
        >
          Sign Up
        </Button>
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
