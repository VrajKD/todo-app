var mongoose = require("mongoose");

var listSchema = new mongoose.Schema({
    title: String,
    created: {
        type: Date,
        default: Date.now
    },
    description: String,
    todos: [{
        description: String,
        date: Date
    }],
    color: {
        type: String,
        default: "#1abc9c"
    },
    edited: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("List", listSchema);