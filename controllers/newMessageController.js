// FUNCTIONS FOR QUERYING THE DATABASE AND SENDING DATA TO ROUTER

const db = require("../db/queries");

async function addNewMessageGet(req, res) {
  res.render("new", { title: "Add a new message" });
}

async function addNewMessagePost(req, res) {
  const { message, name } = req.body;
  await db.addNewMessage({ message, name });
  res.redirect("/");
}

module.exports = {
  addNewMessageGet,
  addNewMessagePost,
};
