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



const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "85vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          px: "5%",
          color: "white",
          textAlign: "left",
          mt: "64px", // offset for fixed navbar if any
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          Empowering Citizens with Information
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained" component={Link} to="/signup">
            Sign Up
          </Button>
          <Button variant="outlined" component={Link} to="#about">
            Learn More
          </Button>
        </Box>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <Typography variant="body1">Scroll Down</Typography>
          <FaChevronDown size={24} color="white" />
        </motion.div>
      </Box>

      {/* Features Section */}
      
      <h1>Our Services</h1>
      <CardSlider />
      // Inside your Home component's return statement, after your FeaturesSection, add:
      <GoalsSection />

      {/* About Section */}
      <Box id="about" sx={{ py: 4, px: 2 }}>
        <Typography variant="h4" gutterBottom>
          About CivicCompass
        </Typography>
        <Typography variant="body1">
          CivicCompass is a comprehensive platform designed to simplify access to public information,
          help citizens navigate complex government schemes, and promote transparency.
        </Typography>
      </Box>
      
    </div>
  );
};

export default Home;
