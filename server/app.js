const express = require("express");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const StudentRouter = require("./routes/students");
const adminRouter=require("./routes/admins")
const uri = "mongodb://localhost:27017/CBIT";
const port = 3000;
const app = express();
app.use(express.json())
mongoose.connect(uri);
const con = mongoose.connection;

con.on("open", () => {
    console.log("server connected");
});

app.use("/students", StudentRouter);
app.use("/admin",adminRouter)

app.listen(port, () => {
    console.log("server started");
});
