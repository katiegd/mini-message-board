const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

const newMessageRouter = require("./routes/newMessage");
const viewMessageRouter = require("./routes/viewMessage");
const messageController = require("./controllers/messageController");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", messageController.getAllMessagesGet);

app.use("/new", newMessageRouter);
app.use("/message", viewMessageRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening at port: ${PORT}`));
