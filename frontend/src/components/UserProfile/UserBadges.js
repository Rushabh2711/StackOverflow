import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export default function UserBadges(props) {
  const { user } = props;

  return (
    <div>
      <Typography
        sx={{ fontSize: 20, color: "#212121" }}
        color="text.secondary"
        align="left"
        gutterBottom
      >
        Badges
      </Typography>
      <Grid item xs={11} align="left">
        <Grid container spacing={0}>
          <Grid item xs={4} align="left">
            <Box sx={{ width: 250, minHeight: 250 }}>
              <Card variant="outlined" sx={{ width: 250, height: 200 }}>
                <CardContent>
                  <Grid container spacing={0}>
                    <Grid item xs={4}>
                      {" "}
                      <img
                        style={{
                          position: "sticky",
                          height: "60px",
                          width: "60px",
                        }}
                        align="left"
                        src={"/images/gold.JPG"}
                        className="card-img-top"
                        alt="description of image"
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography
                        sx={{ fontSize: 26, color: "#212121", mb: "0" }}
                        color="text.secondary"
                        align="left"
                        gutterBottom
                      >
                        {user.gold.length}
                      </Typography>
                      <Typography
                        sx={{ fontSize: 15, color: "#212121" }}
                        color="text.secondary"
                        align="left"
                        gutterBottom
                      >
                        gold badges
                      </Typography>
                    </Grid>
                  </Grid>
                  {user.gold.slice(0, 3).map((badge) => (
                    <div>
                      <Box
                        component="div"
                        sx={{
                          width: 100,
                          bgcolor: "#eeeeee",
                          border: 1,
                          borderColor: "#bdbdbd",
                          color: "#757575",
                          fontSize: 15,
                          mb: 1,
                        }}
                      >
                        <CircleIcon
                          sx={{
                            color: "#ffc400",
                            fontSize: 10,
                          }}
                        ></CircleIcon>{" "}
                        {badge}
                      </Box>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={4} align="left">
            <Box sx={{ width: 250, minHeight: 250 }}>
              <Card variant="outlined" sx={{ width: 250, height: 200 }}>
                <CardContent>
                  <Grid container spacing={0}>
                    <Grid item xs={4}>
                      {" "}
                      <img
                        style={{
                          position: "sticky",
                          height: "60px",
                          width: "60px",
                        }}
                        align="left"
                        src={"/images/silver.JPG"}
                        className="card-img-top"
                        alt="description of image"
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography
                        sx={{ fontSize: 26, color: "#212121", mb: "0" }}
                        color="text.secondary"
                        align="left"
                        gutterBottom
                      >
                        {user.silver.length}
                      </Typography>
                      <Typography
                        sx={{ fontSize: 15, color: "#212121" }}
                        color="text.secondary"
                        align="left"
                        gutterBottom
                      >
                        silver badges
                      </Typography>
                    </Grid>
                  </Grid>
                  {user.silver.slice(0, 3).map((badge) => (
                    <div>
                      <Box
                        component="div"
                        sx={{
                          bgcolor: "#eeeeee",
                          border: 1,
                          borderColor: "#bdbdbd",
                          color: "#757575",
                          fontSize: 15,
                          width: 100,
                          mb: 1,
                        }}
                      >
                        <CircleIcon
                          sx={{
                            color: "#bdbdbd",
                            fontSize: 10,
                          }}
                        ></CircleIcon>{" "}
                        {badge}
                      </Box>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={4} align="left">
            <Box sx={{ width: 250, height: 250 }}>
              <Card variant="outlined" sx={{ width: 250, height: 200 }}>
                <CardContent>
                  <Grid container spacing={0}>
                    <Grid item xs={4}>
                      {" "}
                      <img
                        style={{
                          position: "sticky",
                          height: "60px",
                          width: "60px",
                        }}
                        align="left"
                        src={"/images/bronze.JPG"}
                        className="card-img-top"
                        alt="description of image"
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography
                        sx={{ fontSize: 26, color: "#212121", mb: "0" }}
                        color="text.secondary"
                        align="left"
                        gutterBottom
                      >
                        {user.bronze.length}
                      </Typography>
                      <Typography
                        sx={{ fontSize: 15, color: "#212121" }}
                        color="text.secondary"
                        align="left"
                        gutterBottom
                      >
                        bronze badges
                      </Typography>
                    </Grid>
                  </Grid>
                  {user.bronze.slice(0, 3).map((badge) => (
                    <div>
                      <Box
                        component="div"
                        sx={{
                          bgcolor: "#eeeeee",
                          border: 1,
                          borderColor: "#bdbdbd",
                          color: "#757575",
                          fontSize: 15,
                          width: 100,
                          mb: 1,
                        }}
                      >
                        <CircleIcon
                          sx={{
                            color: "#757575",
                            fontSize: 10,
                          }}
                        ></CircleIcon>{" "}
                        {badge}
                      </Box>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
