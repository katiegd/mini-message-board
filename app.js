const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

app.get("/new", (req, res) => {
  res.render("new", { title: "New Message" });
});

app.post("/new", (req, res) => {
  const { name, message } = req.body;

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const formattedTime = currentDate.toLocaleDateString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedDateTime = `${(formattedDate, formattedTime)}`;

  messages.push({
    text: message,
    user: name,
    added: formattedDateTime,
  });
  res.redirect("/");
});

app.get("/message/:index", (req, res) => {
  const index = req.params.index;

  if (index < 0 || index >= messages.length) {
    return res.status(404).send("Message not found.");
  }

  const message = messages[index];
  res.render("message", { title: "Message Details", message });
});

const messages = [
  {
    text: "You're the best.",
    user: "Amando",
    added: "10/7/2024, 02:01 PM",
  },
  {
    text: "Keep doing great work!",
    user: "Charles",
    added: "10/7/2024, 02:03 PM",
  },
];

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening at port: ${PORT}`));
