import React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function UserAbout(props) {
  const { user } = props;

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Typography
            sx={{ fontSize: 20, color: "#212121", align: "left" }}
            color="text.secondary"
            gutterBottom
            align="left"
          >
            About
          </Typography>
          <Typography
            sx={{ fontSize: 16, color: "#212121", align: "left" }}
            color="text.secondary"
            gutterBottom
            align="left"
          >
            {user.About}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
