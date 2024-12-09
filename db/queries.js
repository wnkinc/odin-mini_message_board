const pool = require("./pool");

async function getAllMessages() {
  const result = await pool.query("SELECT * FROM messages");
  return result.rows;
}

async function getMessage(id) {
  const query = "SELECT * FROM messages WHERE id = $1";
  const values = [id];

  try {
    const result = await pool.query(query, values);
    return result.rows[0]; // Return the first row, or undefined if not found
  } catch (error) {
    console.error("Error fetching message by ID:", error);
    throw error;
  }
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
  getMessage,
};
