const express = require("express");
const router = express.Router();

const newMessageController = require("../controllers/newMessageController");

router
  .route("/")
  .get(newMessageController.addNewMessageGet)
  .post(newMessageController.addNewMessagePost);

module.exports = router;
