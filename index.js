require('dotenv').config()
const Telegram = require("node-telegram-bot-api")

const TOKEN = process.env.TOKEN

const bot = new Telegram(TOKEN, {
  polling: true
})

bot.on('message', (msg)=>{

  bot.sendMessage(msg.chat.id, 'Привет! ' + msg.from.first_name)
})
