const express = require("express");
const router = express.Router();
const db = require("../db/queries");
const { render } = require("ejs");

// router.get("/:id", (req, res) => {
//   res.send("hi");
// });

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.getMessageById(id);
    res.render("message", { title: "View message", message: result });
  } catch (error) {
    console.error("Error fetching message: ", error);
    res.status(500).send("Error fetching message.");
  }
});

module.exports = router;
