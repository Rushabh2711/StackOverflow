import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import UserActivity from "./pages/UserActivity";
import AdminHome from "./pages/admin/AdminHome";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/users/profile/:id" element={<UserProfile />} />
          <Route path="/users/activity/:id" element={<UserActivity />} />
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
