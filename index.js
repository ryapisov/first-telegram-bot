require('dotenv').config()
const debug = require('./helpers')
const Telegram = require("node-telegram-bot-api")

const TOKEN = process.env.TOKEN

const setting = {
  polling:{
    interval: 300,  // мик.сек. между клиентом и сервером
    autoStart: true, // бот будет ждать, затем обработает команду.
    params:{
      timeout: 100 // между запросами
    }
  }
}

const bot = new Telegram(TOKEN, setting)

  bot.on('inline_query', (query)=>{

    const results = []

    for(let i=0; i<5; i++){
      results.push({
        type: 'article',
        id: i.toString(),
        title: 'Title ' + i,
        input_message_content:{
          message_text: `Article #${i+1}`
        }
      })
    }

    bot.answerInlineQuery(query.id, results, {
      cache_time: 0
    })
  })


// =============================================================

// bot.on('message', (msg)=>{
//   const {id} = msg.chat
//
//   bot.sendMessage(id, 'Inline keyboard', {
//     reply_markup:{
//       inline_keyboard:[
//         [
//           {
//             text:"Google",
//             url: 'https://google.com'
//           }
//         ],
//         [
//           {
//             text:"First",
//             callback_data: 'firstMy'
//           },
//           {
//             text:"Second",
//             callback_data: 'secondMy'
//           }
//         ],
//       ]
//     }
//   })
// })
//
// bot.on('callback_query', query => {
//  bot.sendMessage(query.message.chat.id, debug(query))
// // modal
//   bot.answerCallbackQuery(query.id, `${query.data}`)
// })


// =============================================================

// bot.on('message', (msg)=>{
//   const {id} = msg.chat
//
//   if(msg.text === 'Закрыть'){
//     bot.sendMessage(id, 'закрываю клавиатуру', {
//       reply_markup: {
//
//         remove_keyboard: true
//       }
//     })
//   } else if(msg.text === 'Ответить'){
//     bot.sendMessage(id, 'отвечаю ...', {
//       reply_markup: {
//         force_reply: true
//       }
//     })
//   } else {
//     bot.sendMessage(id, 'клавиатура', {
//       reply_markup:{
//         keyboard:[
//           [{
//             text:"Отправить местоположение",
//             request_location: true
//           }],
//           ['Ответить', 'Закрыть'],
//           [{
//             text: "Отправить контакт",
//             request_contact: true
//           }]
//         ],
//         one_time_keyboard: true
//       }
//     })
//   }
// })

// =============================================================

// const {id} = msg.chat
// const html = `
//   <strong>Hello!</strong>
//    <em>italic</em>
//    <a href="http://www.example.com/">inline URL</a>
//   ${debug(msg)}
// `
// setTimeout(()=>{
// bot.sendMessage(id, html,
//    {
//      parse_mode:'HTML',
//      disable_web_page_preview: false,
//      disable_notification: true
//    },
//  )
// },4000)

// bot.onText(/\/start/, (msg)=>{
//   const {id} = msg.chat
//
//   bot.sendMessage(id, debug(msg))
// })
//
// bot.onText(/\/help (.+)/, (msg, [source, match])=>{
//   const {id} = msg.chat
//
//   bot.sendMessage(id, debug(match))
// })
