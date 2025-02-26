const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Initialize the Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes after initializing 'app'
const userRoutes = require("./routes/users");
const schemeRoutes = require("./routes/schemes");
const accountabilityRoutes = require("./routes/accountability");
const govInfoRoutes = require("./routes/govinfo");
const userInfoRoutes = require("./routes/userinfo");
const recommendationRoutes = require("./routes/recommendation");


// Use routes
app.use("/api/users", userRoutes);
app.use("/api/schemes", schemeRoutes);
app.use("/api/accountability", accountabilityRoutes);
app.use("/api/govinfo", govInfoRoutes);
app.use("/api/userinfo", userInfoRoutes);
app.use("/api/recommendations", recommendationRoutes);


// Default route
app.get("/", (req, res) => {
  res.send("CivicCompass Backend is Running 🚀");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
