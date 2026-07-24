let handler = async (m, { conn, participants, usedPrefix, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] MI CREADOR TIENE DESACTIVADO ESTA FUNCIÓN.\n\ 💻 5493863447787'
let kicktext = `⚠️ *ETIQUETA A LA PERSONA O RESPONDE SU MENSAJE PARA ELIMINARLO DE ESTE GRUPO.*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')}
handler.command = /^(kick|echar|hechar|ban|rip|basura)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
handler.register = false
export default handler
