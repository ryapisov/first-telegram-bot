require('dotenv').config()
const debug = require('./helpers')
const Telegram = require("node-telegram-bot-api")
const fs = require('fs')

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

bot.onText(/\/contact/, (msg)=>{
  const chatId = msg.chat.id

  bot.sendContact(chatId, '89260001123', 'name', {last_name:'lastName'})
})

// =============================================================

// bot.onText(/\/loc/, (msg)=>{
//   const chatId = msg.chat.id
//
//   bot.sendLocation(chatId, 51.277841, 30.210990)
// })

// =============================================================
//
// bot.onText(/\/v1/, (msg)=>{
//   const chatId = msg.chat.id
//   bot.sendMessage(chatId, 'Sending video...')
//   bot.sendVideo(chatId, `http://techslides.com/demos/sample-videos/small.mp4`)
// })
//
// bot.onText(/\/v2/, (msg)=>{
//   const chatId = msg.chat.id
//   bot.sendMessage(chatId, 'Sending video...')
//   bot.sendVideo(chatId, `./files/video.mp4`)
// })
//
// bot.onText(/\/v3/, (msg)=>{
//   const chatId = msg.chat.id
//   bot.sendMessage(chatId, 'Sending video...')
//
//   fs.readFile(__dirname + "/files/video.mp4", (err, video)=>{
//     bot.sendVideoNote(chatId, video)
//   })
// })

// =============================================================

// bot.onText(/\/s1/, (msg)=>{
//   bot.sendSticker(msg.chat.id, './files/sticker.webp')
// })
//
// bot.onText(/\/s2/, (msg)=>{
//   fs.readFile(__dirname + "/files/sticker.webp", (err, sticker)=>{
//     bot.sendSticker(msg.chat.id, sticker)
//   })
// })

// =============================================================

// bot.onText(/\/doc1/, (msg)=>{
//   bot.sendDocument(msg.chat.id, './files/document.xlsx')
// })
//
// bot.onText(/\/doc2/, msg=>{
//   bot.sendMessage(msg.chat.id, 'Загрузка началась')
//
//   fs.readFile(__dirname + "/files/document.xlsx", (err, file)=>{
//     bot.sendDocument(msg.chat.id, file, {
//       caption: 'доп.текст'
//     }).then(()=>{
//       bot.sendMessage(msg.chat.id, 'Загрузка закончилась')
//     })
//   })
// })

// =============================================================

// bot.onText(/\/audio/, msg =>{
//   bot.sendAudio(msg.chat.id, fs.readFileSync(__dirname + "/files/muz.mp3"))
// })
//
// bot.onText(/\/audio2/, msg =>{
//   bot.sendMessage(msg.chat.id, 'Start audio uploading ...')
//
//   fs.readFile(__dirname + "/files/muz.mp3", (err, data)=>{
//     bot.sendAudio(msg.chat.id, data).then(()=>{
//       bot.sendMessage(msg.chat.id, 'Успешно загружен')
//     })
//   })
// })

// =============================================================

// bot.onText(/\/pic/, msg =>{
//   bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + "/files/cat.jpg"))
// })
//
// bot.onText(/\/pic2/, msg =>{
//   bot.sendPhoto(msg.chat.id, "./files/cat.jpg", {
//     caption: 'This is cat photo'
//   })
// })


// =============================================================
//
// const inline_keyboard = [
//   [
//     {
//       text:"Forward",
//       callback_data:"forward"
//     },
//     {
//       text:"Reply",
//       callback_data:"reply"
//     }
//   ],
//   [
//     {
//       text:"Edit",
//       callback_data:"edit"
//     },
//     {
//       text:"Delete",
//       callback_data:"delete"
//     }
//   ]
// ]
//
// bot.on('callback_query', (query)=>{
//   const {chat, message_id, text} = query.message
//
//   switch (query.data) {
//     case "forward":
//       // to_chat_id   - это id чата, (куда) нужно сделать репост
//       // from_chat_id - id чата, (откуда) из которого нужно сделать репост
//       // message_id   - id сообщения(не текст), которое нужно переслать
//       // === (to_chat_id, from_chat_id, message_id) ===
//       bot.forwardMessage(chat.id, chat.id, message_id)
//     break
//     case "reply":
//       bot.sendMessage(chat.id, 'Отвечаем на сообщение',{
//         reply_to_message_id: message_id
//       })
//       break
//     case "edit":
//       bot.editMessageText(`${text} edit`, {
//         chat_id: chat.id,  // откуда взять текст
//         message_id:message_id, // id сообщения которое редактировать
//         reply_markup:{inline_keyboard}
//       })
//     break
//     case "delete":
//       bot.deleteMessage(chat.id, message_id)
//     break
//   }
//
//   bot.answerCallbackQuery({
//     callback_query_id: query.id
//   })
// })
//
//
// bot.onText(/\/start/, (msg, [source, match])=>{
//   const chatId = msg.chat.id
//
//   bot.sendMessage(chatId, 'Keyboard', {
//     reply_markup:{
//       inline_keyboard
//     }
//   })
// })

// =============================================================

// bot.on('inline_query', (query)=>{
//
//   const results = []
//
//   for(let i=0; i<5; i++){
//     results.push({
//       type: 'article',
//       id: i.toString(),
//       title: 'Title ' + i,
//       input_message_content:{
//         message_text: `Article #${i+1}`
//       }
//     })
//   }
//
//   bot.answerInlineQuery(query.id, results, {
//     cache_time: 0
//   })
// })

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
