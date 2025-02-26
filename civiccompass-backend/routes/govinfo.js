// routes/govinfo.js
const express = require("express");
const router = express.Router();
const govInfoController = require("../controllers/govInfoController");

// GET endpoint to fetch all government info
router.get("/", govInfoController.getGovInfo);

module.exports = router;
