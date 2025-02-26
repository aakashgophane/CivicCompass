// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import GovernmentInfoPage from "./pages/GovernmentInfoPage";
import UserInfoPage from "./pages/UserInfoPage";
import AccountabilityPage from "./pages/AccountabilityPage";
import ChatbotPage from "./pages/ChatbotPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div>
      <Navbar />
      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<GovernmentInfoPage />} />
          <Route path="/userinfo/:userId" element={<UserInfoPage />} />
          <Route path="/accountability" element={<AccountabilityPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
