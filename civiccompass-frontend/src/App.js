import React from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Import useLocation
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Accountability from "./pages/Accountability";
import Chatbot from "./pages/Chatbot";
import About from "./pages/About";
import GovernmentInfo from "./pages/GovernmentInfo";
import Footer from "./pages/Footer";
import SignUpForm from "./pages/SignUpForm";
import Aibot from "./pages/Aibot";
import "./index.css";

function App() {
  const location = useLocation(); // Get current route

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/government-info" element={<GovernmentInfo />} />
        <Route path="/accountability" element={<Accountability />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/aibot" element={<Aibot />} />  
      </Routes>
      {location.pathname !== "/signup" && location.pathname != "/aibot" && <Footer />}
    </div>
  );
}
// document.addEventListener('contextmenu', event => event.preventDefault());
export default App;
