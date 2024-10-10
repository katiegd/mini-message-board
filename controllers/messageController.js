// FUNCTIONS FOR QUERYING THE DATABASE AND SENDING DATA TO ROUTER

const db = require("../db/queries");

async function getAllMessagesGet(req, res) {
  const messages = await db.showAllMessages();
  res.render("index", { title: "Message Board", messages });
}

module.exports = {
  getAllMessagesGet,
};
