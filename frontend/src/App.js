// Import CSS
import "./App.css";

// Import Pages
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import UserActivityAnswers from "./pages/UserActivityAnswers";
import UserActivityQuestions from "./pages/UserActivityQuestions";
import UserActivityTags from "./pages/UserActivityTags";
import UserActivityBadges from "./pages/UserActivityBadges";
import UserActivityBookmarks from "./pages/UserActivityBookmarks";
import UserActivityReputation from "./pages/UserActivityReputation";
import UserEditProfile from "./pages/UserEditProfile";

// Import Dependencies
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router";

//Import Layout Components
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Navbar/Sidebar";
import PropTypes from "prop-types";

const drawerWidth = 240;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    // <div className="App">
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/signup" element={<SignUp />} />
    //       <Route path="/users/profile/:id" element={<UserProfile />} />
    //       <Route path="/users/editprofile/:id" element={<UserEditProfile />} />
    //       <Route
    //         path="/users/activity/answers/:id"
    //         element={<UserActivityAnswers />}
    //       />
    //       <Route
    //         path="/users/activity/questions/:id"
    //         element={<UserActivityQuestions />}
    //       />
    //       <Route
    //         path="/users/activity/tags/:id"
    //         element={<UserActivityTags />}
    //       />
    //       <Route
    //         path="/users/activity/bookmarks/:id"
    //         element={<UserActivityBookmarks />}
    //       />
    //       <Route
    //         path="/users/activity/badges/:id"
    //         element={<UserActivityBadges />}
    //       />
    //       <Route
    //         path="/users/activity/reputation/:id"
    //         element={<UserActivityReputation />}
    //       />
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function App() {
  const [value, setValue] = React.useState(1);
  let navigate = useNavigate();

  const setComponent = (value) => {
    // setValue(value);
    if (value == 0) {
      //it is home page
      var url = "/";
      navigate(url);
    } else if (value == 2) {
      //it is question page
      var url = "/question";
      navigate(url);
    } else if (value == 3) {
      //it is tags page
      var url = "/tags";
      navigate(url);
    } else if (value == 4) {
      //it is users page
      var url = "/users";
      navigate(url);
    }
  };
  return (
    <div className="App">
      <Box sx={{}}>
        <CssBaseline />
        <Navbar />
        {/* <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              marginLeft: "10%",
            },
            marginLeft: "24px",
          }}
        > */}
        {/* <Toolbar /> */}
        {/* <Box sx={{ overflow: "auto", align: "left" }}>
            <Sidebar setComponent={setComponent} />
          </Box> */}
        {/* </Drawer> */}
        {/* <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
          style={{ padding: "12px 10%" }}
        > */}
        {/* <Toolbar /> */}
        {/* your component goes here */}

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/question" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/users/profile/:id" element={<UserProfile />} />
          <Route path="/users/editprofile/:id" element={<UserEditProfile />} />
          <Route
            path="/users/activity/answers/:id"
            element={<UserActivityAnswers />}
          />
          <Route
            path="/users/activity/questions/:id"
            element={<UserActivityQuestions />}
          />
          <Route
            path="/users/activity/tags/:id"
            element={<UserActivityTags />}
          />
          <Route
            path="/users/activity/bookmarks/:id"
            element={<UserActivityBookmarks />}
          />
          <Route
            path="/users/activity/badges/:id"
            element={<UserActivityBadges />}
          />
          <Route
            path="/users/activity/reputation/:id"
            element={<UserActivityReputation />}
          />
        </Routes>

        {/* <TabPanel value={value} index={0}>
        <LandingPage/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Nothing goes here....
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Tags page component goes here
      </TabPanel>
      <TabPanel value={value} index={4}>
        Users page component goes here
      </TabPanel> */}
      </Box>
      {/* </Box> */}
      {/* <Navbar/> */}
      {/* <Demo/> */}
    </div>
  );
}
