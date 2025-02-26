// routes/schemes.js
const express = require("express");
const router = express.Router();
const schemeController = require("../controllers/schemeController");

// GET endpoint to fetch all schemes
router.get("/", schemeController.getAllSchemes);

// GET endpoint to search schemes by query parameter (e.g., /api/schemes/search?query=health)
router.get("/search", schemeController.searchSchemes);

module.exports = router;
