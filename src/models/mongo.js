const mongoose = require("mongoose")
const { MONGO_URL } = require("../../config")

// imports
require("./UserModel")

module.exports = async function () {
    try {
        await mongoose.connect(MONGO_URL)
        console.log("MONGO CONNECTED")
    } catch(e) {
        console.log("MONGO FAILED" + e)
    }
}