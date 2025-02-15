import yts from 'yt-search';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw ` Por favor ingresa la música que deseás descargar.`;

  const isVideo = /vid|2|mp4|v$/.test(command);
  const search = await yts(text);

  if (!search.all || search.all.length === 0) {
    throw "No se encontraron resultados para tu búsqueda.";
  }

  const videoInfo = search.all[0];
  const body = `「✦」ძᥱsᥴᥲrgᥲᥒძ᥆ *<${videoInfo.title}>*\n\n> ✦ ᥴᥲᥒᥲᥣ » *${videoInfo.author.name || 'Desconocido'}*\n*°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°*\n> ✰ ᥎іs𝗍ᥲs » *${videoInfo.views}*\n*°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°*\n> ⴵ ძᥙrᥲᥴі᥆ᥒ » *${videoInfo.timestamp}*\n*°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°*\n> ✐ ⍴ᥙᑲᥣіᥴᥲძ᥆ » *${videoInfo.ago}*\n*°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°*\n> 🜸 ᥣіᥒk » ${videoInfo.url}\n`;

    if (command === 'play1' || command === 'play2' || command === 'playvid') {
  await conn.sendMessage(m.chat, {
      image: { url: videoInfo.thumbnail },
      caption: body,
      footer: dev,
      buttons: [
        {
          buttonId: `.ytmp3 ${videoInfo.url}`,
          buttonText: {
            displayText: 'ᯓᡣ𐭩 ᥲᥙძі᥆',
          },
        },
        {
          buttonId: `.ytmp4 ${videoInfo.url}`,
          buttonText: {
            displayText: 'ᯓᡣ𐭩 ᥎іძᥱ᥆',
          },
        },
      ],
      viewOnce: true,
      headerType: 4,
    }, { quoted: fkontak });
    m.react('🕒');
    
    } else if (command === 'yta' || command === 'ytmp3') {
    m.react(rwait)
      let audio = await (await fetch(`https://api.botcahx.eu.org/api/download/get-YoutubeResult?url=${videoInfo.url}&type=video&xky=SUuKPL_UzKMEN`)).buffer()
      conn.sendFile(m.chat, audio, videoInfo.title, '', m, null, { mimetype: "audio/mpeg", asDocument: false })
    m.react(done)
    } else if (command === 'ytv' || command === 'ytmp4') {
    m.react(rwait)
      let video = await (await fetch(`https://api.botcahx.eu.org/api/download/get-YoutubeResult?url=${videoInfo.url}&type=video&xky=SUuKPL_UzKMEN`)).buffer()
    await conn.sendMessage(m.chat, {
      video: video,
      mimetype: "video/mp4",
      caption: ``,
    }, { quoted: m });
    m.react(done)
    } else {
      throw "Comando no reconocido.";
    }
};

handler.command = ['play1']
//handler.command = handler.help = ['play', 'playvid', 'ytv', 'ytmp4', 'yta', 'play2', 'ytmp3'];
handler.tags = ['dl'];
handler.group = true;
handler.register = true;

export default handler;

const getVideoId = (url) => {
  const regex = /(?:v=|\/)([0-9A-Za-z_-]{11}).*/;
  const match = url.match(regex);
  if (match) {
    return match[1];
  }
  throw new Error("Invalid YouTube URL");
};
