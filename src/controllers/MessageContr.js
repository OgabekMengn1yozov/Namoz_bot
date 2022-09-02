const postgres = require("../modules/postgres")
const Menu = require("./Menu")
const NamazTime = require("./NamazTime")

module.exports = async (bot, message, user) => {
    try {
        const psql = await postgres()
        
        const user_id = message.from.id
        const { text } = message

        if(user.step == 0 && text == "/start") {
            await Menu(bot, message, user)  
        } else if(user.step == 0 && text == "Namoz vaqtlari ⌛️") {
            await NamazTime(bot, message, user)
        } else if(user.step == 0 && text == "Poklanish 🚿") {
            let keyboard = {
                resize_keyboard: true,
                keyboard: [
                    [
                        {
                            text: "TAHORAT OLISH TARTIBI",
                        }, 
                        {
                            text: "TAHORAT NIMA?"
                        }
                    ], 
                    [
                        {
                            text: "TAHORATNI BUZADIGAN HOLATLAR"
                        }
                    ],
                    [
                        {
                            text: "G'USL"
                        }, 
                        {
                            text: "TAYAMMUM"
                        }
                    ], 
                    [
                        {
                            text: "⬅️Ortga"
                        }
                    ]
                ]
            }

            // await psql.users.update(
            //     {
            //         step: "purification"
            //     }, 
            //     {
            //         where: {
            //             user_id,
            //         }
            //     }
            // )

            bot.sendMessage(user_id, "Quyidagilardan birini tanlang", {
                reply_markup: keyboard,
            })
        }
    } catch(e) {
        console.log(e + "")
    }
}