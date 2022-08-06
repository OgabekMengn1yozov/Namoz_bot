const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true,
    },
    user_id: {
        type: String,
        unique: true,
        required: true,
    },
    step: {
        type: String,
        default: 0,
    }
})

const users = mongoose.model("users", UserSchema)
module.exports = users