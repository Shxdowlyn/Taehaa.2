let handler = async (m, { conn, usedPrefix, command}) => {
let pp = ['https://qu.ax/OMFqX.mp4',
          'https://qu.ax/Fsdxr.mp4']

let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '» *Etiqueta al usuario con el que quieres bañarte*\nEjemplo:\n.bañar @kevin'
let name2 = conn.getName(who)
let name = conn.getName(m.sender)

await conn.sendMessage(m.chat, { video: { url: pp.getRandom() }, gifPlayback: true, caption: `_*${name}*_` + ' 𝘦𝘴𝘵𝘢 𝘣𝘢𝘯̃𝘢𝘯𝘥𝘰𝘴𝘦 𝘤𝘰𝘯' + ` _*${name2}*_` + ' 🛀🏻🚿\n©𝘌𝘭𝘪𝘵𝘦𝘉𝘰𝘵𝘎𝘭𝘰𝘣𝘢𝘭 -', contextInfo: fakeChannel }, { quoted: m })
}
handler.help = ['bañar <@user>']
handler.tags = ['fun']
handler.command = ['bañar']
export default handler





