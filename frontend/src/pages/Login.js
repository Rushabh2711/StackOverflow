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

export default function Login() {
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
        &nbsp;
        <Button
          sx={{ fontSize: 20, width: 320, color: "#fafafa" }}
          variant="contained"
        >
          Log in
        </Button>
      </CardContent>
    </React.Fragment>
  );

  return (
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
