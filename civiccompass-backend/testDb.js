// testDb.js
const db = require("./config/db");

async function testConnection() {
  try {
    const [rows, fields] = await db.query("SELECT 1 + 1 AS solution");
    console.log("Database connection successful! 1 + 1 =", rows[0].solution);
  } catch (err) {
    console.error("Database connection failed:", err);
  }
}

testConnection();
