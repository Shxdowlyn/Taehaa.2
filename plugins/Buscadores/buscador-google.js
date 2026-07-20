import google from 'google-it';
import axios from 'axios';
let handler = async (m, { conn, command, args, usedPrefix }) => {
const fetch = (await import('node-fetch')).default;
const text = args.join` `;
if (!text) return conn.reply(m.chat, '*Ingresa lo que deseas buscar en Google.*', m);
await conn.sendMessage(m.chat, {
        text: ` *↻ Espera humano @${m.sender.split`@`[0]}, estoy procesando tu pedido.*`,
        contextInfo: { 
          mentionedJid: [m.sender],
        }
      }, { quoted: m }).then(_ => m.react('⏰'))
const url = 'https://google.com/search?q=' + encodeURIComponent(text);
google({'query': text}).then(res => {
let teks = `*🔎 Resultado de* : ${text}\n\n`
for (let g of res) {
teks += `*Titulo💌*: ${g.title}\n*Link📎*: ${g.link}\n*Info🧿*: ${g.snippet}\n\n`
}
conn.reply(m.chat, teks, m).then(_ => m.react('✅'))
})
}
handler.help = ['google <búsqueda>'];
handler.tags = ['tools', 'search'];
handler.command = /^googlef?$/i;
handler.star = 1
handler.register = false 
export default handler;
