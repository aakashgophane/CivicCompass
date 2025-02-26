// routes/userinfo.js
const express = require("express");
const router = express.Router();
const userInfoController = require("../controllers/userInfoController");

// GET endpoint to fetch a user's information by user ID
router.get("/:userId", userInfoController.getUserInfo);

module.exports = router;
