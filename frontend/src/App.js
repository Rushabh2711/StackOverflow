
// Import CSS
import './App.css';

// Import Pages
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';

import Question from './pages/Question';
//import AskQuestion from './pages/AskQuestion';

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import UserActivity from "./pages/UserActivity";

// Import Dependencies
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


//Import Layout Components
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar/Navbar';
import Add from './pages/AddQuestion';
//import ViewQuestion from "./components/ViewQuestion/MainQuestion";

import Layout from './pages/Layout';
import MainQuestion from './components/ViewQuestion/MainQuestion';
export default function App() {
  
  return (
    <div className="App">

      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
       
      <Navbar />
     
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/ask" element={<Add />}/>
        <Route path="/home" element={ <Layout page={<Home />} sidebarTabValue={0}/> }/>
        <Route path="/question" element={ <Layout page={<Question />} sidebarTabValue={2}/> }/>
        <Route path="/tags" element={ <Layout page={<Home />} sidebarTabValue={3}/> }/>
        {/* <Route path="/ask" element={<AskQuestion />}/> */}
         {/* <Route path="/view" element={<MainQuestion />}/>  */}
        { <Route path="/view" element={ <Layout page={<MainQuestion />} sidebarTabValue={0}/> }/> }


      </Routes>
    </Box>
      

    </div>
  );
}

