const { Pool } = require("pg");
require("dotenv").config();

// Set up database connection through dotenv to keep secret data safe.

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL || process.env.RENDER_DB_URL,
});
