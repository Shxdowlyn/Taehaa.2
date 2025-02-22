import fetch from 'node-fetch';

let handler = async (m, { conn }) => {
    // Definimos las variables de los grupos y las imágenes
    let soporteGB = "";
    let grupo1 = "https://chat.whatsapp.com/EGuK8Gaetbg83bhEh2LAej";
    let grupo2 = "https://chat.whatsapp.com/EGuK8Gaetbg83bhEh2LAej";
    let grupo3 = "https://chat.whatsapp.com/EGuK8Gaetbg83bhEh2LAej";
    let grupo4 = "https://chat.whatsapp.com/EGuK8Gaetbg83bhEh2LAej";
    let grupo5 = "https://chat.whatsapp.com/EGuK8Gaetbg83bhEh2LAej";

    let grupos = [soporteGB, grupo1, grupo2, grupo3, grupo4, grupo5];

    let img5 = "https://qu.ax/LJEVX.jpg";
    let img6 = "https://qu.ax/LJEVX.jpg";
    let img7 = "https://qu.ax/LJEVX.jpg";
    let img8 = "https://qu.ax/LJEVX.jpg";
    let img9 = "https://qu.ax/LJEVX.jpg";

    let gata = [img5, img6, img7, img8, img9];

    let wm = "Super Bot";
    let yt = "https://youtube.com/@SuperBot";
    let vs = "1.0.0";
    let rg = "🚫";
    let Bot = "🤖 Super Bot";
    global.img = "https://qu.ax/LJEVX.jpg"; // Imagen por defecto

    let fkontak = {
        "key": {
            "participant": "0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    };

    let enlace = {
        contextInfo: {
            externalAdReply: {
                title: `${wm} 🔥`,
                body: 'Support Group',
                sourceUrl: grupos[Math.floor(Math.random() * grupos.length)],
                thumbnail: await (await fetch(gata[Math.floor(Math.random() * gata.length)])).buffer()
            }
        }
    };

    let enlace2 = {
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                mediaUrl: yt,
                mediaType: 'VIDEO',
                description: '',
                title: wm,
                body: '🔥 Super Bot Barboza',
                thumbnailUrl: await (await fetch(global.img)).buffer(),
                sourceUrl: yt
            }
        }
    };

    let dos = [enlace, enlace2];

    await conn.fetchBlocklist().then(async data => {
        let txt = `📛 𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗗𝗢𝗦 : 𝗕𝗟𝗢𝗖𝗞𝗘𝗗\n\n*Total :* ${data.length}\n\n╭━━━[ *${vs} 𓃠* ]━━━⬣\n`;

        for (let i of data) {
            txt += `┃🚫 @${i.split("@")[0]}\n`;
        }

        txt += "╰━━━━━━━⬣\n\n*Por favor no llame para evitar ser bloqueado, gracias.*\n\n*Please do not call to avoid being blocked, thank you.*";

        return conn.reply(m.chat, txt, fkontak, m, { mentions: await conn.parseMention(txt) });
    }).catch(err => {
        console.log(err);
        return conn.reply(m.chat, `${rg}𝙉𝘼𝘿𝙄𝙀 𝙃𝘼 𝙎𝙄𝘿𝙊 𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝘿𝙊\n\n𝙉𝙊 𝙊𝙉𝙀 𝙃𝘼𝙎`, Bot, m);
    });
};

handler.command = ['bloqueados', 'bloqueadoslista', 'listablock', 'blocklist', 'listblock', 'listabloqueados'];

export default handler;
