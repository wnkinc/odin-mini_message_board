const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: process.env.DB_LOCAL_URL,
});

// const pool = new Pool({
//   connectionString: process.env.DB_LOCAL_URL,
// });

// pool
//   .connect()
//   .then((client) => {
//     console.log("Connected to:", client.database);
//     client.release();
//   })
//   .catch((err) => console.error("Connection error:", err));
