/*import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `[✔️] 𝗬𝗮 𝗲𝘀𝘁𝗮𝘀 𝘃𝗲𝗿𝗶𝗳𝗶𝗰𝗮𝗱𝗼\n\n¿𝗤𝘂𝗶𝗲𝗿𝗲𝘀 𝘃𝗲𝗿𝗶𝗳𝗶𝗰𝗮𝗿𝘁𝗲 𝗱𝗲 𝗻𝘂𝗲𝘃𝗼?\n\n 📓𝗨𝘀𝗮 𝗲𝘀𝘁𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼 𝗽𝗮𝗿𝗮 𝗲𝗹𝗶𝗺𝗶𝗻𝗮𝗿 𝘁𝘂 𝘃𝗲𝗿𝗶𝗳𝗶𝗰𝗮𝗰𝗶𝗼𝗻 \n .unreg`;
  if (!Reg.test(text)) throw `[❕] 𝗨𝘀𝗼 𝗶𝗻𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗼\n\n—◉ 𝗨𝘀𝗼 𝗱𝗲𝗹 𝗰𝗼𝗺𝗮𝗻𝗱𝗼: ${usedPrefix + command} *nombre.edad*\n*—◉ Ejemplo: ${usedPrefix + command} kevin.19*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '[❗] 𝗘𝘀𝗰𝗿𝗶𝗯𝗲 𝘂𝗻 𝗻𝗼𝗺𝗯𝗿𝗲';
  if (!age) throw '[❗] 𝗟𝗮 𝗘𝗱𝗮𝗱?';
  if (name.length >= 30) throw '[❗] 𝗡𝗼𝗺𝗯𝗿𝗲 𝗺𝘂𝘆 𝗹𝗮𝗿𝗴𝗼';
  age = parseInt(age);
  if (age > 100) throw '[⁉️] ¿𝗦𝗶𝗴𝘂𝗲𝘀 𝘃𝗶𝘃𝗼 𝗮𝘂𝗻 𝗮 𝘁𝘂 𝗲𝗱𝗮𝗱?';
  if (age < 5) throw '[⁉️] ¿𝗨𝗻 𝗯𝗲𝗯𝗲 𝗾𝘂𝗲 𝘂𝘀𝗮 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽? ';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `┏┅ ━━━━━━━━━━━━ ┅ ━
┇「 ~🪁𝗩𝗘𝗥𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢́𝗡🪁~ 」
┣┅ ━━━━━━━━━━━━ ┅ ━
┃🖋️ ✦𝗡𝗮𝗺𝗲: ${name}
┃🖋️ ✦𝗘𝗱𝗮𝗱: ${age} años
┣┅ ━━━━━━━━━━━━ ┅ ━
┣┅ ✦𝗬𝗮 𝗲𝘀𝘁𝗮𝘀 𝘃𝗲𝗿𝗶𝗳𝗶𝗰𝗮𝗱𝗼 
┣┅ 𝖤𝗅𝗂𝗍𝖾𝖡𝗈𝗍𝖦𝗅𝗈𝖻𝖺𝗅 -
┗┅ ━━━━━━━━━━━━ ┅ ━`;
  // let author = global.author
  await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);
  // conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(verify|register|verificar|reg|registrar)$/i;
export default handler;*/

import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, args, usedPrefix, command }) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ppch = await conn.profilePictureUrl(who, 'image').catch(_ => imageUrl.getRandom()) 
let bio = await conn.fetchStatus(who).catch(_ => 'undefined')
let biot = bio.status?.toString() || 'Sin Info'
const date = moment.tz('America/Bogota').format('DD/MM/YYYY')
const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')
let userNationality = null; 
try {
let api = await axios.get(`${apis}/tools/country?text=${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}`);
let userNationalityData = api.data.result;
userNationality = userNationalityData ? `${userNationalityData.name} ${userNationalityData.emoji}` : null;
} catch (err) {
userNationality = null; 
}
let user = db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let name2 = conn.getName(m.sender)

if (command == 'verify' || command == 'reg' || command == 'verificar') {
if (user.registered === true) throw `*Ya estás registrado 🤨*`
if (!Reg.test(text)) throw `*⚠️ ¿No sabes cómo usar este comando?* Usar de la seguiente manera:\n\n*${usedPrefix + command} nombre.edad*\n*• Ejemplo:* ${usedPrefix + command} ${name2}.16`
  
let [_, name, splitter, age] = text.match(Reg);
if (!name) throw '*¿Y el nombre?*'
if (!age) throw '*La edad no puede estar vacía, agrega tu edad*'
if (name.length >= 45) throw '*¿Qué?, ¿tan largo va a ser tu nombre?*'
  
age = parseInt(age);
if (age > 100) throw '👴🏻 ¡Estás muy viejo para esto!'
if (age < 5) throw '🚼 ¿Los bebés saben escribir? ✍️😳'

user.name = name + '✓'.trim()
//user.name = name.trim();
user.age = age;
user.regTime = +new Date();
user.registered = true;
global.db.data.users[m.sender].money += 400;
global.db.data.users[m.sender].limit += 2;
global.db.data.users[m.sender].exp += 150;
  
let sn = createHash('md5').update(m.sender).digest('hex');
await conn.sendMessage(m.chat, { text: `[ ✅ REGISTRO COMPLETADO ]

◉ *Nombre:* ${name}
◉ *Edad:* ${age} años
◉ *Hora:* ${time} 🇦🇷
◉ *Fecha:* ${date} ${userNationality ? `\n◉ *País:* ${userNationality}` : ''}
◉ *Número:* wa.me/${who.split`@`[0]}
◉ *Número de serie:*
⤷ ${sn}

🎁 *Recompensa:*
⤷ 2 diamantes 💎
⤷ 400 Coins 🪙
⤷ 150 exp

*◉ Para ver los comandos del bot usar:*
${usedPrefix}menu

◉ *Total de usuarios registrados:* ${toNum(rtotalreg)} 

> *Mira tú registro en este canal*
${nnaa}`, contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: ['120363355261011910@newsletter', '120363297379773397@newsletter'].getRandom(), serverMessageId: '', newsletterName: 'LoliBot ✨' }, forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": `𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐀𝐃𝐎`, "body": wm, "previewType": "PHOTO", thumbnail: img.getRandom(), sourceUrl: [nna, nna2, nn, md, yt, tiktok].getRandom()}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
//await m.reply(`${sn}`);
await global.conn.sendMessage(global.ch.ch1, { text: `◉ *Usuarios:* ${m.pushName || 'Anónimo'} ${userNationality ? `\n◉ *País:* ${userNationality}` : ''}
◉ *Verificación:* ${user.name}
◉ *Edad:* ${age} años
◉ *Fecha:* ${date}
◉ *Bot:* ${wm}
◉ *Número de serie:*
⤷ ${sn}`, contextInfo: {
externalAdReply: {
title: "『 𝙉𝙊𝙏𝙄𝙁𝙄𝘾𝘼𝘾𝙄𝙊́𝙉 📢 』",
body: "Nuevo usuario registrado 🥳",
thumbnailUrl: ppch, 
sourceUrl: [nna, nna2, nn, md, yt, tiktok].getRandom(),
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })
}

if (command == 'nserie' || command == 'myns' || command == 'sn') {
let sn = createHash('md5').update(m.sender).digest('hex')
conn.fakeReply(m.chat, sn, '0@s.whatsapp.net', `⬇️ ᴇsᴛᴇ ᴇs sᴜs ɴᴜᴍᴇʀᴏ ᴅᴇʟ sᴇʀɪᴇ ⬇️`, 'status@broadcast', null, fake)
}

if (command == 'unreg') {
if (!args[0]) throw `✳️ *Ingrese número de serie*\nVerifique su número de serie con el comando...\n\n*${usedPrefix}nserie*`
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw '⚠️ *Número de serie incorrecto*'
global.db.data.users[m.sender].money -= 400
global.db.data.users[m.sender].limit -= 2
global.db.data.users[m.sender].exp -= 150
user.registered = false
conn.fakeReply(m.chat, `😢 Ya no estas registrado`, '0@s.whatsapp.net', `ᴿᵉᵍᶦˢᵗʳᵒ ᵉˡᶦᵐᶦⁿᵃᵈᵒ`, 'status@broadcast', null, fake)
}}
handler.help = ['reg', 'verificar', 'myns', 'nserie', 'unreg']
handler.tags = ['rg']
handler.command = /^(nserie|unreg|snn|myns|verify|verificar|registrar|reg(ister)?)$/i
export default handler

function toNum(number) {
    if (number >= 1000 && number < 1000000) {
        return (number / 1000).toFixed(1) + 'k';
    } else if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M';
    } else if (number <= -1000 && number > -1000000) {
        return (number / 1000).toFixed(1) + 'k';
    } else if (number <= -1000000) {
        return (number / 1000000).toFixed(1) + 'M';
    } else {
        return number.toString();
    }
    }
