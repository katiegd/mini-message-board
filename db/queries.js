const pool = require("./pool");

// FUNCTIONS FOR QUERYING THE DATABASE

async function showAllMessages() {
  const { rows } = await pool.query(
    "SELECT * FROM messages ORDER BY created_at DESC"
  );
  console.log(rows);
  return rows;
}

async function addNewMessage(newMessage) {
  console.log("adding new message");
  await pool.query(`INSERT INTO 
        messages (message, name)
         VALUES ('${newMessage.message}', '${newMessage.name}');`);
}

module.exports = {
  showAllMessages,
  addNewMessage,
};
