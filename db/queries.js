const pool = require("./pool");

async function getAllMessages() {
  const result = await pool.query("SELECT * FROM messages");
  return result.rows;
}

// async function insertMessage(message) {
//     await pool.query
// }

module.exports = {
  getAllMessages,
};
