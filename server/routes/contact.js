const express = require("express");
const router = express.Router();
const { sendMessage } = require("../controllers/contact");

router.post("/contact", sendMessage);

module.exports = router;