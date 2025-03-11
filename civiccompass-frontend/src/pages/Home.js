// src/pages/Home.js
import React from "react";
import backgroundImage from "./images/background1.jpeg";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import "./Home.css";
import CardSlider from "./CardSlider";
import "./CardSlider.css";
import GoalsSection from "./GoalsSection"; // Adjust path as needed
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "89vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center", // Center content horizontally
          textAlign: "center",  // Align text to center
          color: "white",
          px: "5%",
        }}
      >
        {/* Heading */}
        <Typography 
          variant="h3" 
          sx={{ fontWeight: "bold", mb: 3, maxWidth: "80%" }}
        >
          Empowering Citizens with Information
        </Typography>

        {/* Buttons Section */}
        <Box sx={{ display: "flex", gap: 3 }}>
        <Button 
            variant="contained" 
            component={Link} 
            to="/signup"  // Navigate within the same tab
            sx={{ borderRadius: "20px", px: 3, py: 1.5 }}
          >
            Sign Up
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/aibot"   // Navigate to AI Bot Page
            sx={{ borderRadius: "20px", px: 3, py: 1.5 }}
          >
            Ask AI
          </Button>
        </Box>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            position: "absolute",
            bottom: "40px", // Adjusted for visibility
            left: "47%",
            transform: "translateX(-50%)",
            textAlign: "center",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
          onClick={() => {
            document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
          }}
        >
          <Typography variant="body1">Scroll Down</Typography>
          <FaChevronDown size={28} color="white" />
        </motion.div>
      </Box>

      {/* Features Section */}
      <Box sx={{ textAlign: "center", pt: "60px", pb: "97px", backgroundColor: "#f9f9f9" }}>
  <Typography variant="h4" sx={{ fontWeight: "bold", mb: 5, color: "#333" }}>
    Our Services
  </Typography>
  <CardSlider />
</Box>

      {/* Additional Sections */}
      <GoalsSection />

      {/* About Section */}
      <Box id="about" sx={{ backgroundColor: "#F3F3F3", // Light background
        // border: "2px solid #E6E6FA", // Lavender border
        borderRadius: 2,
        p: 4,
        textAlign: "center",
        mx: "auto",
        mt: 3,
        maxWidth: "100vw",
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
         }}>
        <Typography variant="h4" gutterBottom>
          About CivicCompass
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, color: "#555" }}>
          CivicCompass is a comprehensive platform designed to simplify access to public 
          information, help citizens navigate complex government schemes, and promote transparency.
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
