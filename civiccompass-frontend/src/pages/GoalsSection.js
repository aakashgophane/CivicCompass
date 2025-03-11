import React from 'react';
import { Box, Typography } from '@mui/material';

const GoalsSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F3F3F3", // Light background
        // border: "2px solid #E6E6FA", // Lavender border
        borderRadius: 2,
        p: 4,
        textAlign: "center",
        mx: "auto",
        maxWidth: "100vw",
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column"
      }}
    >
      <Typography variant="h3" sx={{ color: "#E6E6FA", fontWeight: "bold" }}>
        Our Goals
      </Typography>
      <Typography variant="h6" sx={{ mt: 2, color: "#555" }}>
        To simplify access to public information, empower citizens, and enhance transparency in public services.
      </Typography>
    </Box>
  );
};

export default GoalsSection;
