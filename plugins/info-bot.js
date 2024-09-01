import fs from 'fs';
let url = 'https://telegra.ph/file/18740c62be781967b7e8d.png'
const handler = (m) => m;
handler.all = async function(m) {
  const chat = global.db.data.chats[m.chat];

  if (/^bot$/i.test(m.text) && !chat.isBanned) {
    conn.sendPresenceUpdate('typing', m.chat);
    await conn.sendMessage(m.chat, { image: { url: url }, caption: `*𝙰𝙷𝙾𝚁𝙸𝚃𝙰 𝙽𝙾 𝙴𝚂𝚃𝙴́𝚂 𝙲𝙷𝙸𝙽𝙶𝙰𝙽𝙳𝙾, 𝙿𝙴𝚁𝚁𝙰*` }, { quoted: m })
  }
  return !0;
};
export default handler;