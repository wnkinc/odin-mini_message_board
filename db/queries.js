const pool = require("./pool");

async function getAllMessages() {
  const result = await pool.query("SELECT * FROM messages");
  return result.rows;
}

async function insertMessage(message, name) {
  const query = `
      INSERT INTO messages (message, name, created_at)
      VALUES ($1, $2, NOW())
      RETURNING *;
  `;
  const values = [message, name];

  try {
    const result = await pool.query(query, values);
    return result.rows[0]; // Return the inserted row
  } catch (error) {
    console.error("Error inserting message:", error);
    throw error; // Re-throw the error to handle it higher up
  }
}

module.exports = {
  getAllMessages,
  insertMessage,
};
