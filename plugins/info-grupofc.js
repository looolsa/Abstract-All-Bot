const handler = async (m, {conn, usedPrefix}) => {
  const text = `*𝚃𝚎 𝚒𝚗𝚟𝚒𝚝𝚘 𝚊 𝚞𝚗𝚒𝚛𝚝𝚎 𝚊𝚕 𝚐𝚛𝚞𝚙𝚘 𝚘𝚏𝚒𝚌𝚒𝚊𝚕 𝚙𝚊𝚛𝚊 𝚎𝚗𝚝𝚎𝚛𝚊𝚛𝚝𝚎 𝚍𝚎 𝚝𝚘𝚍𝚊𝚜 𝚕𝚊𝚜 𝚗𝚘𝚟𝚎𝚍𝚊𝚍𝚎𝚜 𝚛𝚎𝚜𝚙𝚎𝚌𝚝𝚘 𝚊𝚕 𝚋𝚘𝚝*

*✰ 𝙶𝚛𝚞𝚙𝚘 𝚘𝚏𝚒𝚌𝚒𝚊𝚕::*

*1.-* https://chat.whatsapp.com/CN3YieShy2S3LnVRJ7aPPM`.trim();
  conn.reply(m.chat, text.trim(), m);
};
handler.command = ['linkgc', 'grupos'];
export default handler;