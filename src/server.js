const TelegramBot = require("node-telegram-bot-api")
const { TOKEN } = require("../config")
const MessageContr = require("./controllers/MessageContr")
const MessageSend = require("./controllers/MessageContr")
const mongo = require("./models/mongo")
const users = require("./models/UserModel")
const { v4 } = require("uuid")
const bot = new TelegramBot(TOKEN, {
    polling: true,
})

mongo()

bot.on("message", async (message) => {
    const userId = message.from.id

    let user = await users.findOne({
        user_id: userId,
    })

    if(!user) {
        user = await users.create({
            id: v4(),
            user_id: userId,
        })
    }

    if(message.text == "/start") {
        await bot.sendMessage(userId, "Botga hush Kelibsiz")
    }

    await MessageContr(bot, message, user)
})