require("dotenv").config()

const { env } = process

module.exports = {
    TOKEN: env.TOKEN,
    PORT: env.PORT,
    DB_URL: env.DB_URL
}