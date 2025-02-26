// routes/recommendation.js
const express = require("express");
const router = express.Router();
const recommendationController = require("../controllers/recommendationController");

// POST endpoint for getting recommendations based on user query
router.post("/", recommendationController.getRecommendations);

module.exports = router;
