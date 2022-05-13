// Import CSS
import "./App.css";
// import "./tags.css"
// Import Pages

import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Question from "./pages/Question";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import AdminHome from "./pages/admin/AdminHome";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserActivityAnswers from "./pages/UserActivityAnswers";
import UserActivityQuestions from "./pages/UserActivityQuestions";
import UserActivityTags from "./pages/UserActivityTags";
import UserActivityBadges from "./pages/UserActivityBadges";
import UserActivityBookmarks from "./pages/UserActivityBookmarks";
import UserActivityReputation from "./pages/UserActivityReputation";
import UserEditProfile from "./pages/UserEditProfile";
import ErrorPage from "./pages/ErrorPage";

import UsersPage from "./pages/User/UserPage";
import TagsPage from "./pages/Tags/TagPage";

// Import Dependencies
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//Import Layout Components

import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar/Navbar";
import Add from "./pages/AddQuestion";
//import ViewQuestion from "./components/ViewQuestion/MainQuestion";

import Layout from "./pages/Layout";
import SearchTag from "./pages/SearchTag";
import MainQuestion from "./components/ViewQuestion/MainQuestion";

export default function App() {
  return (
    <div className="App">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar />

        <Routes>
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/home"
            element={<Layout page={<Home />} />}
          />
          <Route
            path="/question"
            element={<Layout page={<Question />} />}
          />
          <Route
            path="/tags"
            element={<Layout page={<TagsPage />} />}
          />
          <Route
            path="/users"
            element={<Layout page={<UsersPage />}  />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
  <Route
            path="/question/tagged/:tagName"
            element={<Layout page={<SearchTag />} />}
          />
          <Route
            path="/users/profile/:id"
            element={<Layout page={<UserProfile />} />}
          />

          <Route
            path="/users/editprofile/:id"
            element={<Layout page={<UserEditProfile />} />}
          />

          <Route
            path="/users/activity/answers/:id"
            element={<Layout page={<UserActivityAnswers />} />}
          />

          <Route
            path="/users/activity/questions/:id"
            element={<Layout page={<UserActivityQuestions />} />}
          />

          <Route
            path="/users/activity/tags/:id"
            element={<Layout page={<UserActivityTags />} />}
          />

          <Route
            path="/users/activity/bookmarks/:id"
            element={<Layout page={<UserActivityBookmarks />} />}
          />

          <Route
            path="/users/activity/badges/:id"
            element={<Layout page={<UserActivityBadges />} />}
          />

          <Route
            path="/users/activity/reputation/:id"
            element={<Layout page={<UserActivityReputation />} />}
          />
          <Route path="/ask" element={<Add />} />
          <Route
            path="/question/view/:id"
            element={<Layout page={<MainQuestion />} />}
          />

          <Route path="/errorpage" element={<ErrorPage />}  />
        </Routes>
      </Box>
    </div>
  );
}
