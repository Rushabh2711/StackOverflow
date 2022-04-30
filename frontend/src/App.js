import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
