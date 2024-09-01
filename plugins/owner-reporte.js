const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[💠] 𝙽𝙾 𝙴𝚂𝚃𝙴́𝚂 𝙲𝙷𝙸𝙽𝙶𝙰𝙽𝙳𝙾, 𝙿𝙴𝚁𝚁𝙸𝚃𝙰, 𝚅𝙴 𝙰 𝚁𝙴𝙿𝙾𝚁𝚃𝙰𝚁 𝙰 𝚃𝚄 𝙿𝚄𝚃𝙰 𝙼𝙰𝙳𝚁𝙴*`;
  const teks =
  m.reply(`*[ 💠 ] 𝙳𝙴𝙹𝙰 𝙳𝙴 𝙹𝙾𝙳𝙴𝚁, 𝙿𝚄𝚃𝙰*`);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes)$/i;
export default handler;