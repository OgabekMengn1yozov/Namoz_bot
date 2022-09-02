const TelegramBot = require("node-telegram-bot-api")
const { TOKEN } = require("../config")
const MessageContr = require("./controllers/MessageContr")
const postgres = require("./modules/postgres")

const bot = new TelegramBot(TOKEN, {
    polling: true,
})

bot.on("message", async (message) => {
    try {
        const psql = await postgres()

        const user_id = message.from.id

        let user = await psql.users.findOne({
            where: {
                user_id,
            },
            raw: true,
        })
  
        if(!user) {
            await bot.sendMessage(user_id, "Botga xush kelibsiz")
            
            const { first_name, last_name, username } = message.from

            user = await psql.users.create({
                user_id,
                first_name, 
                last_name, 
                username,
                step: "region",
            }, {
                raw: true,
            })

            let keyboard = {
                resize_keyboard: true,
                keyboard: [
                    [
                        {
                            text: "Toshkent",
                        },
                        {
                            text: "Termiz"
                        }
                    ]
                ]
            }
            bot.sendMessage(user_id, "Mintaqani tanlang", {
                reply_markup: keyboard,
            })
        } else if (user.step == "region") {
            const text = message.text

            user = await psql.users.update({
                region: text,
                step: 0,
            }, {
                where: {
                    user_id,
                }
            })

            await MessageContr(bot, message, user)
        } else {
            await MessageContr(bot, message, user)
        }

    } catch(e) {
        console.log(e + "")
    }
})