// controllers/schemeController.js
const db = require("../config/db");

// Controller to fetch all schemes from the scheme_data table
exports.getAllSchemes = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM schemes");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching schemes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to search schemes based on a query parameter
exports.searchSchemes = async (req, res) => {
  try {
    const query = req.query.query;
    if (!query) {
      return res.status(400).json({ error: "Query parameter is required" });
    }
    const [rows] = await db.query("SELECT * FROM schemes WHERE scheme LIKE ?", [`%${query}%`]);
    res.json(rows);
  } catch (error) {
    console.error("Error searching schemes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
