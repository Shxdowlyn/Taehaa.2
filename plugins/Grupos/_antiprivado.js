const comandos = /piedra|papel|tijera|estado|verificar|code|jadibot --code|--code|creadora|bottemporal|grupos|instalarbot|términos|bots|deletebot|eliminarsesion|serbot|verify|register|registrar|reg|reg1|nombre|name|nombre2|name2|edad|age|edad2|age2|genero|género|gender|identidad|pasatiempo|hobby|identify|finalizar|pas2|pas3|pas4|pas5|registroc|deletesesion|registror|jadibot/i

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {

let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

let setting = global.db.data.settings[this.user.jid]
const settingsREAD = global.db.data.settings[this.user.jid] || {}

if (m.text && prefixRegex.test(m.text)) {
  await this.sendPresenceUpdate('composing', m.chat)
  await this.readMessages([m.key])

  let usedPrefix = m.text.match(prefixRegex)[0]
  let command = m.text.slice(usedPrefix.length).trim().split(' ')[0]
}

if (m.fromMe) return true
if (m.isGroup) return false
if (!m.message) return true

const regexWithPrefix = new RegExp(`^${prefix.source}\\s?${comandos.source}`, 'i')

if (regexWithPrefix.test(m.text.toLowerCase().trim())) return true

let chat, user, bot

chat = global.db.data.chats[m.chat]
user = global.db.data.users[m.sender]
bot = global.db.data.settings[this.user.jid] || {}

if (bot.antiPrivate && !isOwner && !isROwner) {

  await conn.reply(
    m.chat,
    mid.mAdvertencia + mid.smsprivado(m, cuentas),
    m,
    { mentions: [m.sender] }
  )

  try {
    await conn.updateBlockStatus(m.sender, 'block')
    console.log(`Usuario bloqueado: ${m.sender}`)
  } catch (e) {
    console.error('Error al bloquear usuario:', e.message)
  }
}

return false
}