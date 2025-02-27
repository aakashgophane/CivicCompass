import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Accountability from "./pages/Accountability";
import Chatbot from "./pages/Chatbot";
import About from "./pages/About";
import GovernmentInfo from "./pages/GovernmentInfo"; // Import the new component

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/government-info" element={<GovernmentInfo />} /> {/* Add this line */}
        <Route path="/accountability" element={<Accountability />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
      
    </div>
  );
}

export default App;