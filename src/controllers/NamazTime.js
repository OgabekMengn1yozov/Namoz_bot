const axios = require("axios")

module.exports = async (bot, message, user) => {
    try {
        const user_id = message.from.id

        const url = `https://islomapi.uz/api/present/day?region=${user.region}`
        
        const {data} = await axios.get(url)
        console.log(data)
        bot.sendMessage(user_id, `<b>Namoz vaqtlari</b>:\n<b>Sana:  </b>${data.date}\n<b>${data.weekday}</b> kuni\n<b>Tong: </b>${data.times.tong_saharlik}\n<b>Quyosh:  </b>${data.times.quyosh}\n<b>Peshin:</b>${data.times.peshin}\n<b>Asr:  </b>${data.times.asr}\n<b>Shom:  </b>${data.times.shom_iftor}\n<b>Xufton:  </b>${data.times.hufton}`, {
            parse_mode: "HTML",
        })
    } catch(e) {
        console.log(e)
    }
}