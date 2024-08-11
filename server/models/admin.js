const mongoose = require("mongoose");
const admin = new mongoose.Schema({
    name: { type: String, required: true },
    subject: { type: String, required: true },
    dept: { type: String, required: true },
});
module.exports = mongoose.model("admin", admin);