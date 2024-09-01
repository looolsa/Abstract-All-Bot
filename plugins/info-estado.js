const handler = async (m, {conn}) => {
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const str = `┍⊰᯽⊱┈──╌❊ㅤ⇑ㅤ❊╌──┈⊰᯽⊱
│『 *𝙴 𝚂 𝚃 𝙰 𝙳 𝙾* 』
┝⊰᯽⊱┈┈┈┈─────┴┈─┐
│
│ •➺ *𝙼𝚞𝚢 𝙱𝚞𝚎𝚗𝚊𝚜, ${taguser}*
│
├⊰ ☃︎ *𝚃𝚒𝚎𝚖𝚙𝚘 𝙰𝚌𝚝𝚒𝚟𝚘:* ${uptime}
├⊰ ✞ *𝙱𝚘𝚝 𝚍𝚎 𝚄𝚜𝚘 𝙿𝚞𝚋𝚕𝚒𝚌𝚘*
├⊰ ♛︎ *𝙲𝚛𝚎𝚊𝚍𝚘𝚛:* ඞ 𝐿.𝐴𝑛 ༆
├⊰ ® *𝙶𝚛𝚞𝚙𝚘 𝙾𝚏𝚒𝚌𝚒𝚊𝚕:* https://chat.whatsapp.com/CN3YieShy2S3LnVRJ7aPPM
┝⊰᯽⊱┈──╌❊ㅤ⇓ㅤ❊╌──┈⊰᯽⊱
*└*B̷y̷. 𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝𝚊𝚕𝚕 - 𝙱𝚘𝚝`.trim();
conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/b27447ce33bde63ba9e6d.jpg' }, caption: str.trim(),
contextInfo: {
mentionedJid: conn.parseMention(str.trim()),
isForwarded: true,
forwardingScore: 999,
externalAdReply: {
title: conn.getName(m.sender),
body: '[ 💠 ] If you read this, you need follow me on instagram.',
thumbnailUrl: 'https://telegra.ph/file/485d9a6bc06b2592fdca5.jpg',
sourceUrl: 'https://www.instagram.com/lansg___?igsh=MWJicGI3azRudzRwMw==',
mediaType: 1,
renderLargerThumbnail: true
}}})
};
handler.help = ['estado'];
handler.tags = ['main'];
handler.command = /^(estado|status|estate|state|stado|stats|runtime|uptime)$/i;
export default handler;
function clockString(ms) {
  const d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [`\n│ *> ❖ ` + d, ' 𝙳𝚒́𝚊(𝚜)* ', `\n│ *> ⚄︎ ` + h, ' 𝙷𝚘𝚛𝚊(𝚜)* ', `\n│ *> ♖︎ ` + m, ' 𝙼𝚒𝚗𝚞𝚝𝚘(𝚜)* ', `\n│ *> ♔︎ ` + s, ' 𝚂𝚎𝚐𝚞𝚗𝚍𝚘(𝚜)* '].map((v) => v.toString().padStart(2, 0)).join('');
}