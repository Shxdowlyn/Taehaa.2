let handler = async (m, { conn, usedPrefix, command}) => {
let pp = ['https://qu.ax/RspuJ.mp4','https://qu.ax/ZHnMG.mp4','https://qu.ax/ZHnMG.mp4','https://qu.ax/RspuJ.mp4']

let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '» *Etiqueta al usuario con el que quieres tomarte un cafesito*\nEjemplo:\n.tomarcafe @kevin'
let name2 = conn.getName(who)
let name = conn.getName(m.sender)

await conn.sendMessage(m.chat, { video: { url: pp.getRandom() }, gifPlayback: true, caption: `_*${name}*_` + ' 𝘦𝘴𝘵𝘢 𝘵𝘰𝘮𝘢́𝘯𝘥𝘰𝘴𝘦 𝘶𝘯 𝘤𝘢𝘧𝘦 𝘤𝘰𝘯' + ` _*${name2}*_` + ' ☕\n©𝘌𝘭𝘪𝘵𝘦𝘉𝘰𝘵𝘎𝘭𝘰𝘣𝘢𝘭 -', contextInfo: fakeChannel }, { quoted: m })
}
handler.help = ['tomarcafe <@user>']
handler.tags = ['fun']
handler.command = ['tomarcafe']
export default handler












import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, text }) => {
 if (!text) throw `» *Etiqueta al usuario con el que quieres tomarte un cafesito*\nEjemplo:\n.tomarcafe @kevin`
try {
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { 
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `
*@${m.sender.split("@")[0]}* 𝘦𝘴𝘵𝘢 𝘵𝘰𝘮𝘢́𝘯𝘥𝘰𝘴𝘦 𝘶𝘯 𝘤𝘢𝘧𝘦 𝘤𝘰𝘯 *${text}* ☕\n©𝘌𝘭𝘪𝘵𝘦𝘉𝘰𝘵𝘎𝘭𝘰𝘣𝘢𝘭 -`.trim()

const vi = ['https://qu.ax/qqxEC.mp4']
await m.react('☕')
try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: await conn.parseMention(menu) }, { quoted: fkontak })
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gataMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: await conn.parseMention(menu) }, { quoted: fkontak })
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: gataImg.getRandom(), gifPlayback: false, caption: menu, mentions: await conn.parseMention(menu) }, { quoted: fkontak })
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: await conn.parseMention(menu) })
} catch (error) {
return
}}}
}
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '\n' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}
handler.command = /^(tomarcafe)$/i
handler.register = false
handler.group = true
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

