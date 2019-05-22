var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    lists: {
        id: mongoose.Schema.Types.ObjectId,
        ref: "List"
    },
    color: "String",
})

module.exports - mongoose.model("User", userSchema);