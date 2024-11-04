const express = require("express");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const StudentRouter = require("./routes/students");
const adminRouter = require("./routes/admins");
const cors = require("cors");
// const uri ="mongodb://localhost:27020,localhost:27021,localhost:27022/CBIT?replicaSet=m101";
const uri = "mongodb://localhost:27017/CBIT";
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(uri);
const con = mongoose.connection;

con.on("open", () => {
    console.log("Database connected");
});

app.use("/students", StudentRouter);
app.use("/admins", adminRouter);

app.listen(PORT, () => {
    console.log("server started on",port);
});
