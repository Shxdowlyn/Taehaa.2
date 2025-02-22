// Código Hecho Por Niño Piña wa.me/50557865603
let handler = async (m, { conn }) => {
// React con un emoji al mensaje
m.react('🌞');
// Siuuuuuuuuu
const message = "⏰*DESPERTADOR*⏰ Levántense webones 💪🥵";
if (m.isGroup) {
// CrowBot-Ai🎄
const videoUrl = 'https://files.catbox.moe/xss6jx.mp4'; //  Levantense🗣️🔥🔥
// Feliz Navidad
// Deja Los Créditos
await conn.sendMessage(m.chat, { video: { url: videoUrl }, caption: message }, { mimetype: 'video/mp4' });
}
}
handler.help = ['despertar'];
handler.tags = ['group'];
handler.command = ['despertar', 'desp', 'despierten', 'levantense'];
handler.group = true;
export default handler;
