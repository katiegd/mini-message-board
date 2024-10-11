const pool = require("./pool");

// FUNCTIONS FOR QUERYING THE DATABASE

async function showAllMessages() {
  const { rows } = await pool.query(
    "SELECT * FROM messages ORDER BY created_at DESC"
  );
  return rows;
}

async function addNewMessage(newMessage) {
  await pool.query(`INSERT INTO 
        messages (message, name)
         VALUES ('${newMessage.message}', '${newMessage.name}');`);
}

async function getMessageById(id) {
  const result = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
  return result.rows[0];
}

module.exports = {
  showAllMessages,
  addNewMessage,
  getMessageById,
};
