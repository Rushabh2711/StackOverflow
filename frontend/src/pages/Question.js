import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Navbar/Sidebar';

import QuestionAnswerCards from "../components/Cards/QuestionAnswerCards";
import HomeFilter from "../components/Filters/HomeFilter";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  boxShadow: "none",
  verticalAlign: "center",
}));

const drawerWidth = 240;

export default function Home() {
  const [posts, setPosts] = React.useState("posts");
  const [tempPosts, setTempPosts] = React.useState(posts);

  return (
    <Box
      style={{ position: "relative", width: "80%", paddingTop: "10px" }}
      sx={{ display: "flex" }}
    >
      <Grid container spacing={2} style={{ marginBottom: "10px", marginTop: "0px" }}>
        <Grid item xs={12} sm={12} md={12} style={{ paddingTop: "0px" }}>
          <Item style={{ textAlign: "left" }}>
            <Grid container spacing={2} style={{ alignItems: "center", marginTop: "0px"}}>
              <Grid item xs={6} sm={6} md={6} style={{ paddingTop: "0px" }}>
                <Item>
                  <Typography
                    variant="body1"
                    noWrap
                    component="div"
                    sx={{
                      display: { xs: "none", sm: "inline-block" },
                      color: "#232629",
                      fontFamily:
                        '-apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif',
                      marginRight: "2px",
                      fontSize: "27px",
                    }}
                    textTransform="none"
                  >
                    All Questions
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={6} sm={6} md={6} style={{ paddingTop: "0px" }}>
                <Item style={{ textAlign: "right" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      minWidth: "100px",
                      lineHeight: "2",
                      textTransform: "none",
                      color: "#FFFFFF",
                      backgroundColor: "#0A95FF",
                      borderColor: "#7AA7C7",
                      "&:hover": {
                        color: "#FFFFFF",
                        backgroundColor: "#0074CC",
                      },
                    }}
                  >
                    Ask Question
                  </Button>
                </Item>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} md={12} style={{ paddingTop: "0px" }}>
          <Item>
            <Grid container spacing={2} style={{ alignItems: "center", marginTop: "0px"}}>
              <Grid item xs={6} sm={6} md={6} style={{ paddingTop: "0px" }}>
                <Item style={{ textAlign: "left" }}>
                  <Typography
                    variant="body1"
                    noWrap
                    component="div"
                    sx={{
                      display: { xs: "none", sm: "inline-block" },
                      color: "#232629",
                      fontFamily:
                        '-apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif',
                      marginRight: "2px",
                      fontSize: "17px",
                    }}
                    textTransform="none"
                  >
                    22,552,060 Questions
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={6} sm={6} md={6} style={{ paddingTop: "0px" }}>
                <Item style={{ textAlign: "right" }}>
                  <HomeFilter data={posts} setTempPosts={setTempPosts}/>
                </Item>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          style={{ paddingTop: "0px", textAlign: "left" }}
        >
          <QuestionAnswerCards type="home" data="gridData" />
        </Grid>
      </Grid>
    </Box>
  );
}
