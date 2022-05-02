// Import CSS
import "./App.css";

// Import Pages

import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Question from "./pages/Question";

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

//Import Layout Components

import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar/Navbar';
import Add from './pages/AddQuestion';
//import ViewQuestion from "./components/ViewQuestion/MainQuestion";

import Layout from './pages/Layout';
//import MainQuestion from './components/ViewQuestion/MainQuestion';

export default function App() {
  return (
    <div className="App">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />


        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/home"
            element={<Layout page={<Home />} sidebarTabValue={0} />}
          />
          <Route
            path="/question"
            element={<Layout page={<Question />} sidebarTabValue={2} />}
          />
          <Route
            path="/tags"
            element={<Layout page={<Home />} sidebarTabValue={3} />}
          />
          <Route
            path="/login"
            element={<Layout page={<Login />} sidebarTabValue={4} />}
          />
          <Route
            path="/signup"
            element={<Layout page={<SignUp />} sidebarTabValue={4} />}
          />

          <Route
            path="/users/profile/:id"
            element={<Layout page={<UserProfile />} />}
          />

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
              <Route path="/ask" element={<Add />}/>
        </Routes>
      </Box>
    </div>
  );
}
