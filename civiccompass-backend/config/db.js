// config/db.js
const mysql = require("mysql2");
require("dotenv").config();

// Create a connection pool for better performance
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3307,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Export a promise-based pool
module.exports = pool.promise();
