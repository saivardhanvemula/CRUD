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
        const a = await a1.save();
        res.send(a);
    } catch (error) {
        res.send(error);
    }
});
router.post("/:name", async (req, res) => {
    let name = req.params.name;
    console.log(name);

    try {
        const a = await admin.findOne({ name: name }, { _id: 0, __v: 0 });
        res.send(a);
    } catch (error) {
        res.send(error);
    }
});
router.delete("/:name", async (req, res) => {
    let name = req.params.name;
    try {
        const a = await admin.findOneAndDelete({ name: name });
        res.send(a);
    } catch (error) {
        res.send(error);
    }
});
router.patch("/:name", async (req, res) => {
    let name = req.params.name;
    let sub = req.body.subject;
    console.log(name,sub)
    try {
        const a = await admin.findOneAndUpdate(
            { name: name },
            { subject: sub },
            { new: true },
            {_id:0,__v:0}
        );
        console.log(a)
        res.send(a);
    } catch (error) {
        res.send(error);
    }
});
module.exports = router;
