// controllers/recommendationController.js
const db = require("../config/db");

exports.getRecommendations = async (req, res) => {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: "Query is required." });
  }

  // Basic dummy keyword extraction: split the query into words
  const keywords = query.trim().split(/\s+/);
  
  // Build SQL query dynamically: search the 'scheme' field for any keyword
  const conditions = keywords.map(() => "scheme LIKE ?").join(" OR ");
  const sql = `SELECT * FROM scheme_data WHERE ${conditions}`;
  const params = keywords.map(keyword => `%${keyword}%`);

  try {
    const [rows] = await db.query(sql, params);
    res.json(rows);
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
