let handler = async (m, {conn, text}) => {
 let name = await conn.getName(m.sender);

 m.reply(`*[ ⚠️ ️]* 𝗡𝗢 𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗘𝗦 𝗔 𝗠𝗜 𝗖𝗥𝗘𝗔𝗗𝗢𝗥, 𝗖𝗢𝗡𝗧𝗔́𝗖𝗧𝗔𝗧𝗘 𝗖𝗢𝗡 𝗘𝗟 𝗔 𝗦𝗨 𝗣𝗥𝗜𝗩𝗔𝗗𝗢 𝗦𝗜 𝗖𝗥𝗘𝗘𝗦 𝗤𝗨𝗘 𝗔𝗟𝗚𝗢 𝗜𝗠𝗣𝗢𝗥𝗧𝗔𝗡𝗧𝗘.`)
}
handler.customPrefix = /@5493863447787/i;
handler.command = new RegExp();

export default handler;
