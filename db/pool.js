const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: process.env.DB_LOCAL_URL,
});
