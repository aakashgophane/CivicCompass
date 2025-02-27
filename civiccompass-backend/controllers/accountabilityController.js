// controllers/accountabilityController.js
const db = require("../config/db");

// Fetch all accountability records from the table
exports.getAllAccountability = async (req, res) => {
    console.log("GET /api/accountability called");
    try {
    const [rows] = await db.query("SELECT * FROM accountability");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching accountability data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Search accountability records based on query parameter
exports.searchAccountability = async (req, res) => {
  try {
    const query = req.query.query;
    if (!query) return res.status(400).json({ error: "Query parameter is required" });

    const [rows] = await db.query(
      "SELECT * FROM accountability WHERE service LIKE ? OR responsible_department LIKE ?",
      [`%${query}%`, `%${query}%`]
    );
    res.json(rows);
  } catch (error) {
    console.error("Error searching accountability data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
