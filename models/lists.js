var mongoose = require("mongoose");

var listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    description: String,
    todos: [{
        description: {
            type: String,
            required: true
        },
        date: Date
    }],
    color: "String",
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: "String"
    },
    edited: {
        type: Date,
        default: Date.now
    }
})

module.exports - mongoose.model("List", listSchema);