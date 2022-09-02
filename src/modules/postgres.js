const { Sequelize } = require("sequelize")
const { DB_URL } = require("../../config")
const userModel = require("../models/userModel")

const sequelize = new Sequelize(DB_URL, {
    logging: (e) => console.log("SQL: ", e),
})

async function postgres() {
    try {
        const db = {}

        // models
        db.users = await userModel(Sequelize, sequelize)

        sequelize.sync({ force: false });
        return db
    } catch(e) {
        console.log("POSTGRES", e)
    }
}

module.exports = postgres