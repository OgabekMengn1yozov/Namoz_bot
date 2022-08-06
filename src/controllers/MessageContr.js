const Menu = require("./Menu")

module.exports = async (bot, message, user) => {
    try {
        const userId = message.from.id
        const text = message

        if(user.step == 0 || text == "/start") {
            await Menu(bot, message, user)  
        }
    } catch(e) {
        console.log(e + "")
    }
}