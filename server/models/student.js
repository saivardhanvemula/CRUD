const mongoose = require("mongoose");

const student = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true,
    },
    roll: {
        type: Number,
        required: true,
    },
    gender:{
        type:Boolean,
        required:true
    }
});

module.exports = mongoose.model("student", student);
