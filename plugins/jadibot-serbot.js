import fs from 'fs'
import fetch from 'node-fetch';
import axios from 'axios';

let timeout = 30000
let poin = 500 

let handler = async (m, { conn, command, usedPrefix }) => {
if (!db.data.chats[m.chat].game) throw `${lenguajeGB['smsAvisoAG']()}𝙇𝙊𝙎 𝙅𝙐𝙀𝙂𝙊𝙎 𝙀𝙎𝙏𝘼𝙎 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊, 𝙎𝙄 𝙀𝙍𝙀𝙎 𝘼𝘿𝙈𝙄𝙉𝙎 𝙋𝙐𝙀𝘿𝙀 𝘼𝘾𝙏𝙄𝙑𝘼𝙍𝙇𝙊 𝘾𝙊𝙉 : #on juegos` 
conn.tekateki = conn.tekateki ? conn.tekateki : {}
let id = m.chat
if (id in conn.tekateki) {
conn.reply(m.chat, 'Todavía hay un juegos sin responder en este chat', conn.tekateki[id][0])
throw false
}

try {    
if (command == 'acertijo' || command == 'acert' || command == 'adivinanza' || command == 'tekateki') {
let tekateki = JSON.parse(fs.readFileSync(`./src/game/acertijo.json`))
let json = tekateki[Math.floor(Math.random() * tekateki.length)]
let _clue = json.response
let clue = _clue.replace(/[A-Za-z]/g, '_')
let caption = `
ⷮ *${json.question}*

*• Tiempo:* ${(timeout / 1000).toFixed(2)} segundos
*• Bono:* +${poin} Exp
`.trim()
conn.tekateki[id] = [
await conn.reply(m.chat, caption, m),
json, poin, setTimeout(async () => {
if (conn.tekateki[id]) await conn.reply(m.chat, `Se acabó el tiempo!\n*Respuesta:* ${json.response}`, conn.tekateki[id][0])
delete conn.tekateki[id]
}, timeout)]}

if (command == 'advpe' || command == 'adv' || command == 'peliculas' || command == 'pelicula') {    
let tekateki = JSON.parse(fs.readFileSync(`./src/game/peliculas.json`))
let json = tekateki[Math.floor(Math.random() * tekateki.length)]
let _clue = json.response
let clue = _clue.replace(/[A-Za-z]/g, '_')
let caption = `
ⷮ *${json.question}*

*• Tiempo:* ${(timeout / 1000).toFixed(2)} segundos
*• Bono:* +${poin} Exp
`.trim()
conn.tekateki[id] = [
await //conn.reply(m.chat, caption, m),
conn.sendMessage(m.chat, { text: caption, contextInfo:{forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "body": `• ADIVINAN LA PELÍCULA CON EMOJIS •`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: md}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}), json, poin, setTimeout(async () => {
if (conn.tekateki[id]) await conn.reply(m.chat, `Se acabó el tiempo!\n*Respuesta:* ${json.response}`, conn.tekateki[id][0])
delete conn.tekateki[id]
}, timeout)
]}

if (command == 'cancion' || command == 'canción') {
conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {};
const id = m.chat;
if (id in conn.tebaklagu) {
conn.reply(m.chat, 'Todavía hay canciones sin respuesta en este chat.', conn.tebaklagu[id][0]);
throw false;
} // 5LTV57azwaid7dXfz5fzJu
const res = await fetchJson(`https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/tebaklagu.json`);
const json = res[Math.floor(Math.random() * res.length)];
const caption = `ADIVINA EL TITULO DE LA CANCION\n⎔ Tiempo ➺ ${(timeout / 1000).toFixed(2)} segundos ⏰\n⎔ Escribe *${usedPrefix}pista* Para obtener una pista 😸\n⎔ Premio: ${poin} XP⚡\n\nRESPONDE A ESTE MENSAJE CON LAS RESPUESTAS!!`.trim();
conn.tebaklagu[id] = [
await m.reply(caption),
json, poin, setTimeout(() => {
if (conn.tebaklagu[id]) conn.reply(m.chat, `Se acabó el tiempo!\nLa respuesta es ${json.jawaban}`, conn.tebaklagu[id][0]);
delete conn.tebaklagu[id];
}, timeout),
];
const aa = await conn.sendMessage(m.chat, {audio: {url: json.link_song}, fileName: `error.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
if (!aa) return conn.sendFile(m.chat, json.link_song, 'coba-lagi.mp3', '', m);
};

//Créditos a Katashi Fukushima
if (command == 'palabra' || command == 'word' || command == 'ordenar' || command == 'order') {

let tekateki = JSON.parse(fs.readFileSync(`./src/game/palabra.json`))
let json = tekateki[Math.floor(Math.random() * tekateki.length)]
let _clue = json.response
let clue = _clue.replace(/[A-Za-z]/g, '_')
let caption = `
ⷮ *${json.question}*

*• Tiempo:* ${(timeout / 1000).toFixed(2)} segundos
*• Bono:* +${poin} Exp

✨ Responde a este mensaje con la palabra correcta ✨
`.trim()
conn.tekateki[id] = [
await conn.reply(m.chat, caption, m),
json, poin, setTimeout(async () => {
if (conn.tekateki[id]) await conn.reply(m.chat, `Se acabó el tiempo!\n*Palabra:* ${json.response}`, conn.tekateki[id][0])
delete conn.tekateki[id]
}, timeout)
]}

// Créditos a Katashi Fukushima
// Créditos a Wilson Waoz
if (command == 'trivia' || command == 'triviador') {
let tekateki = JSON.parse(fs.readFileSync(`./src/game/trivia.json`))
let json = tekateki[Math.floor(Math.random() * tekateki.length)]
let _clue = json.response
let clue = _clue.replace(/[A-Za-z]/g, '_')
let caption = `
ⷮ *${json.question}*

*• Tiempo:* ${(timeout / 1000).toFixed(2)} segundos
*• Bono:* +${poin} Exp

💫 Responde a este mensaje con la letra de la opción correcta ✅
`.trim()
conn.tekateki[id] = [
await conn.reply(m.chat, caption, m),
json, poin, setTimeout(async () => {
if (conn.tekateki[id]) await conn.reply(m.chat, `Se acabó el tiempo!`, conn.tekateki[id][0])
delete conn.tekateki[id]
}, timeout)
]}

if (command == 'hint' || command == 'pista') {
conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {};
const id = m.chat;
if (!(id in conn.tebaklagu)) throw false;
const json = conn.tebaklagu[id][1];
const nya = json.jawaban;
const nyanya = nya.replace(/[bcdfghjklmnñpqrstvwxyzBCDEFGHJKLMNÑPQRSTVWXYZ]/g, '_');
m.reply('' + nyanya + '');
}} catch (e) {
//await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, fkontak, m)
//console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}
handler.help = ['acertijo']
handler.tags = ['game']
handler.command = /^(acertijo|acert|adivinanza|tekateki|advpe|adv|peliculas|pelicula|cancion|canción|palabra|word|ordenar|order|trivia|triviador|hint|pista)$/i

export default handler

async function fetchJson(url, options) {
  try {
options ? options : {};
const res = await axios({method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options});
return res.data;
  } catch (err) {
    return err;
  }
}
