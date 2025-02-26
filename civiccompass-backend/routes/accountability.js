// routes/accountability.js
const express = require("express");
const router = express.Router();
const accountabilityController = require("../controllers/accountabilityController");

// Route to fetch all accountability records
router.get("/", accountabilityController.getAllAccountability);

// Route to search accountability records by query parameter
router.get("/search", accountabilityController.searchAccountability);

module.exports = router;
