const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const admin = require("../models/admin");

router.get("/", (req, res) => {
    res.send("admin api");
});
module.exports = router;
