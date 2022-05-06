import React, { useEffect, useState } from "react";
import userJson from "../dummydata/user.json";
import UserDetails from "../components/UserProfile/UserDetails";
import UserProfileNavbar from "../components/UserProfile/UserProfileNavbar";
import UserActivitySidebar from "../components/UserProfile/UserActivitySidebar";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, Grid, Typography } from "@mui/material";

export default function UserActivityBadges() {
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
        <UserProfileNavbar page={"activity"} user={user}></UserProfileNavbar>
      </div>
      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          {" "}
          <UserActivitySidebar tab={"badges"} user={user}></UserActivitySidebar>
        </Grid>

        <Grid item xs={10}>
          <Typography
            sx={{ fontSize: 20, color: "#212121", align: "left" }}
            color="text.secondary"
            gutterBottom
            align="left"
          >
            Badges
          </Typography>{" "}
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {user.gold !== null ? (
              user.gold.map((goldbadge) => (
                <Grid item xs={3}>
                  <div>
                    {goldbadge.type === "tag" ? (
                      <Grid item xs={3}>
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
                                color: "#ffc400",
                                fontSize: 10,
                              }}
                            ></CircleIcon>{" "}
                            {goldbadge.name}
                          </Box>
                        </div>
                      </Grid>
                    ) : (
                      <Grid item xs={3}>
                        <div>
                          <Box
                            component="div"
                            sx={{
                              bgcolor: "#263238",
                              border: 1,
                              borderColor: "#bdbdbd",
                              color: "white",
                              fontSize: 15,
                              width: 100,
                              mb: 1,
                            }}
                          >
                            <CircleIcon
                              sx={{
                                color: "#ffc400",
                                fontSize: 10,
                              }}
                            ></CircleIcon>{" "}
                            {goldbadge.name}
                          </Box>
                        </div>
                      </Grid>
                    )}
                  </div>
                </Grid>
              ))
            ) : (
              <div></div>
            )}
            {user.silver !== null ? (
              user.silver.map((silverbadge) => (
                <Grid item xs={3}>
                  <div>
                    {silverbadge.type === "tag" ? (
                      <Grid item xs={3}>
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
                            {silverbadge.name}
                          </Box>
                        </div>
                      </Grid>
                    ) : (
                      <Grid item xs={3}>
                        <div>
                          <Box
                            component="div"
                            sx={{
                              bgcolor: "#263238",
                              border: 1,
                              borderColor: "#bdbdbd",
                              color: "white",
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
                            {silverbadge.name}
                          </Box>
                        </div>
                      </Grid>
                    )}
                  </div>
                </Grid>
              ))
            ) : (
              <div></div>
            )}
            {user.bronze !== null ? (
              user.bronze.map((bronzebadge) => (
                <Grid item xs={3}>
                  <div>
                    {bronzebadge.type === "tag" ? (
                      <Grid item xs={3}>
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
                            {bronzebadge.name}
                          </Box>
                        </div>
                      </Grid>
                    ) : (
                      <Grid item xs={3}>
                        <div>
                          <Box
                            component="div"
                            sx={{
                              bgcolor: "#263238",
                              border: 1,
                              borderColor: "#bdbdbd",
                              color: "white",
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
                            {bronzebadge.name}
                          </Box>
                        </div>
                      </Grid>
                    )}
                  </div>
                </Grid>
              ))
            ) : (
              <div></div>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
