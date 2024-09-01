import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┏┅┅┓ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┏┅┅┓
┣┱  🝃ɞ *𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝- 𝙰𝚕𝚕 ł 𝙱𝚘𝚝* ʚ🝃  ┲┫
┗┅┅┚ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┗┅┅┛

⊱┈ ❦ *𝚆𝚎𝚗𝚊𝚜, ${taguser}*

❊⊰᯽⊱ *𝐸𝑛 𝑒𝑠𝑡𝑒 𝑎𝑝𝑎𝑟𝑡𝑎𝑑𝑜 𝑠𝑒 𝑒𝑛𝑐𝑢𝑒𝑛𝑡𝑟𝑎 𝑢𝑛 𝑚𝑒𝑛𝑢́ 𝑞𝑢𝑒 𝑡𝑜𝑑𝑎𝑣𝑖́𝑎 𝑠𝑖𝑔𝑢𝑒 𝑒𝑛 𝑑𝑒𝑠𝑎𝑟𝑟𝑜𝑙𝑙𝑜. 𝐿𝑜𝑠 𝑐𝑜𝑚𝑎𝑛𝑑𝑜𝑠 𝑚𝑜𝑠𝑡𝑟𝑎𝑑𝑜𝑠 𝑎 𝑐𝑜𝑛𝑡𝑖𝑛𝑢𝑎𝑐𝑖𝑜́𝑛, 𝑐𝑎𝑟𝑒𝑐𝑒𝑛 𝑑𝑒 𝑢𝑡𝑖𝑙𝑖𝑑𝑎𝑑 𝑠𝑒𝑟𝑖𝑎.*

┍⊰᯽⊱┈──╌❊ㅤ⇑ㅤ❊╌──┈⊰᯽⊱
│『 *𝚁 𝙰 𝙽 𝙳 𝙾 𝙼 - 𝙸* 』
┝⊰᯽⊱┈┈┈┈─────┴┈─┐
├⊰🝍 _${usedPrefix}yetty_
├⊰🝍 _${usedPrefix}yetty2_
├⊰🝍 _${usedPrefix}simpc_
├⊰🝍 _${usedPrefix}sadcat_
├⊰🝍 _${usedPrefix}crycat_
├⊰🝍 _${usedPrefix}cutecat_
├⊰🝍 _${usedPrefix}ctm_
├⊰🝍 _${usedPrefix}gatocagado_
├⊰🝍 _${usedPrefix}jaja_
├⊰🝍 _${usedPrefix}nomames_
├⊰🝍 _${usedPrefix}simpemocat_
├⊰🝍 _${usedPrefix}ssk_
├⊰🝍 _${usedPrefix}dios_
├⊰🝍 _${usedPrefix}tostadas_
┕⊰᯽⊱┈──╌❊ㅤ⇓ㅤ❊╌──┈⊰᯽⊱
`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menui|randomi|pendejadas|menurandomi|menudemrd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}