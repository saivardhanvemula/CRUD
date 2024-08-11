const express = require("express");
const mongodb = require("mongodb");
const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/CBIT";
const port = 3000;

mongoose.connect(uri)
const con = mongoose.connection;

con.on("open", () => {
    console.log("server connected");
});

const app = express();

app.listen(port,()=>{
    console.log("server started")
})