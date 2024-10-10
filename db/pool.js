const { Pool } = require("pg");
require("dotenv").config();

// Set up database connection through dotenv to keep secret data safe.

module.exports = new Pool({
  connectionString: process.env.RENDER_DB_URL,
});
