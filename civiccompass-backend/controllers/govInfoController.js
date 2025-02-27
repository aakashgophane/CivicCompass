// controllers/govInfoController.js
const db = require("../config/db");

exports.getGovInfo = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM government_info");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching government info:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
