// src/pages/FeaturesSection.js
import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const features = [
  { name: "Government Info", emoji: "🏛️", description: "Access comprehensive government data." },
  { name: "Profile", emoji: "👤", description: "Manage your personal details and eligibility." },
  { name: "Accountability Tracker", emoji: "📌", description: "Track responsibilities and progress." },
  { name: "Scheme Recommender", emoji: "📜", description: "Discover schemes tailored to you." },
  { name: "Chatbot", emoji: "🤖", description: "Interact with our AI-powered chatbot." },
  { name: "Extra Feature", emoji: "✨", description: "More features coming soon." },
];

const FeaturesSection = () => {
  return (
    <Box sx={{ my: 4, px: 2 }}>
      <Typography variant="h4" gutterBottom align="center">
        Explore Our Features
      </Typography>
      <Box className="features-container">
        {features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 auto",
              width: { xs: "250px", md: "300px" },
              scrollSnapAlign: "center",
            }}
          >
            <Card
              sx={{
                minHeight: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
                backgroundColor: index === 2 ? "#1976d2" : "#fff",
                color: index === 2 ? "#fff" : "inherit",
                boxShadow: 3,
              }}
            >
              <Typography variant="h3">{feature.emoji}</Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>
                {feature.name}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, textAlign: "center" }}>
                {feature.description}
              </Typography>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FeaturesSection;
