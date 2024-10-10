const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

const newMessageRouter = require("./routes/newMessage");
const messageController = require("./controllers/messageController");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", messageController.getAllMessagesGet);

app.use("/new", newMessageRouter);

// app.get("/message/:index", (req, res) => {
//   const index = req.params.index;

//   if (index < 0 || index >= messages.length) {
//     return res.status(404).send("Message not found.");
//   }

//   const message = messages[index];
//   res.render("message", { title: "Message Details", message });
// });

// const messages = [
//   {
//     text: "You're the best.",
//     user: "Amando",
//     added: "10/7/2024, 02:01 PM",
//   },
//   {
//     text: "Keep doing great work!",
//     user: "Charles",
//     added: "10/7/2024, 02:03 PM",
//   },
// ];

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening at port: ${PORT}`));
