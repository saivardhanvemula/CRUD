const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const admin = require("../models/admin");

router.get("/", (req, res) => {
    res.send("Welcome to Admin Router");
});
router.post("/", async (req, res) => {
    const a1 = new admin({
        name: req.body.name,
        subject: req.body.subject,
        dept: req.body.dept,
    });
    // console.log(a1)
    try {
        const a =await a1.save();
        res.send(a);
    } catch (error) {
        res.send(error);
    }
});
module.exports = router;
