// controllers/userInfoController.js
const db = require("../config/db");

exports.getUserInfo = async (req, res) => {
  const userId = req.params.userId;
  try {
    const [rows] = await db.query("SELECT * FROM user_data WHERE user_id = ?", [userId]);
    if (rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error("Error fetching user info:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
