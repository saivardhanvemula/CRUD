const express = require("express");
const mongoose = require("mongoose");
const mongodb = require("mongodb");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});
const student = mongoose.model("Student", studentSchema);
const app = express();
app.use(express.json());

const uri = "mongodb://localhost:27017/CBIT";
const port = 3000;
mongoose.connect(uri);

app.get("/", (req, res) => {
    res.send("okay");
});
app.post("/student", async (req, res) => {
    const s = new student({ name: req.body.name });
    console.log(s);
    await s.save();
    res.send(s);
});
app.listen(port, () => {
    console.log("Server running on port ", port);
});
