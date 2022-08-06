module.exports = async (bot, message, user) => {
    try {
        const userId = message.from.id


        let keyboard = {
            resize_keyboard: true,
            keyboard: [
                [
                    {
                        text: "Namoz vaqtlari ⌛️",
                    },
                    {
                        text :"Poklanish 🚿",
                    }
                ],
                [
                    {
                        text: "Erkaklar uchun namoz 👳",
                    },
                    {
                        text: "Ayollar uchun namoz 🧕",
                    },
                ],
                [
                    {
                        text: "Tasbeh 📿",
                    },
                    {
                        text: "Qazolar xisobi 🗓",
                    },
                ],
                [
                    {
                        text: "Namozdagi xatolar",
                    },
                    {
                        text: "Namozdan keyingi zikrlar",
                    }
                ],
                [
                    {
                        text: "Jamoat namozlari",
                    },
                    {
                        text: "Qo'shimcha",
                    }
                ]
            ]
        }

        await bot.sendMessage(userId, "Bosh menu", {
            reply_markup: keyboard,
        })
    } catch(e) {
        console.log(e)
    }
}     