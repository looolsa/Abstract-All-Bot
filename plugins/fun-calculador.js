const handler = async (m, {conn, command, text, usedPrefix}) => {
  if (!text) throw `*[ 💠 ] Proporciona la mención para hacer el cálculo.*`;
  if (command == 'gay2') {
    conn.reply(m.chat, `
*[ 🏳️‍🌈 ] _${text.toUpperCase()} es ${(500).getRandom()}% GAY._*\n\n_⚕️.- Un asco este maldito gay..._
`.trim(), m, m.mentionedJid ? {
  mentions: m.mentionedJid,
} : {});
  }
  if (command == 'lesbiana') {
    conn.reply(m.chat, `
*[ 🏳️‍🌈 ] _${text.toUpperCase()} es ${(500).getRandom()}% ${command.replace('how', '').toUpperCase()}_*\n\n_⚕️.- Tremenda..._
`.trim(), m, m.mentionedJid ? {
  mentions: m.mentionedJid,
} : {});
  }
  if (command == 'pajero') {
    conn.reply(m.chat, `
*[ 💦 ] _${text.toUpperCase()} es ${(500).getRandom()}% ${command.replace('how', '').toUpperCase()}_*\n\n_⚕️.- Maldito adicto al porno..._
`.trim(), m, m.mentionedJid ? {
  mentions: m.mentionedJid,
} : {});
  }
  if (command == 'pajera') {
    conn.reply(m.chat, `
*[ 💦 ] _${text.toUpperCase()} es ${(500).getRandom()}% ${command.replace('how', '').toUpperCase()}_*\n\n_⚕️.- Una adicta al dedazo..._
`.trim(), m, m.mentionedJid ? {
  mentions: m.mentionedJid,
} : {});
  }
  if (command == 'puto') {
    conn.reply(m.chat, `
*[ 🏳️‍🌈 ] _${text.toUpperCase()} es ${(500).getRandom()}% ${command.replace('how', '').toUpperCase()}_*\n\n_⚕️.- Otro maldito homosexual de mierda..._
`.trim(), m, m.mentionedJid ? {
  mentions: m.mentionedJid,
} : {});
  }
  if (command == 'puta') {
    conn.reply(m.chat, `
*[ 🔥 ] _${text.toUpperCase()} es ${(500).getRandom()}% ${command.replace('how', '').toUpperCase()}_*\n\n_🥵.- Más información en su chat privado..._
`.trim(), m, m.mentionedJid ? {
  mentions: m.mentionedJid,
} : {});
  }
  if (command == 'manco') {
    conn.reply(m.chat, `
*[ 💩 ] _${text.toUpperCase()} es ${(500).getRandom()}% ${command.replace('how', '').toUpperCase()}_*\n\n_⚕️.- XD_
`.trim(), m, m.mentionedJid ? {
  mentions: m.mentionedJid,
} : {});
  }
  if (command == 'manca') {
    conn.reply(m.chat, `
*[ 💩 ] _${text.toUpperCase()} es ${(500).getRandom()}% ${command.replace('how', '').toUpperCase()}_*\n\n_⚕️.- Tenía que ser vieja..._
`.trim(), m, m.mentionedJid ? {
  mentions: m.mentionedJid,
} : {});
  }
  if (command == 'rata') {
    conn.reply(m.chat, `
*[ 🐁 ] _${text.toUpperCase()} es ${(500).getRandom()}% ${command.replace('how', '').toUpperCase()}_*\n\n_🧀.- Pinche tragaqueso..._
`.trim(), m, m.mentionedJid ? {
  mentions: m.mentionedJid,
} : {});
  }
  if (command == 'prostituto') {
    conn.reply(m.chat, `
*[ 🫦 ] _${text.toUpperCase()} es ${(500).getRandom()}% ${command.replace('how', '').toUpperCase()}_*\n\n_👅.- ¿Quién quiere sus servicios?_*
`.trim(), m, m.mentionedJid ? {
  mentions: m.mentionedJid,
} : {});
  }
  if (command == 'prostituta') {
    conn.reply(m.chat, `
*[ 🫦 ] _${text.toUpperCase()} es ${(500).getRandom()}% ${command.replace('how', '').toUpperCase()}_*\n\n_👅.- ¿Quién quiere sus servicios?_
`.trim(), m, m.mentionedJid ? {
  mentions: m.mentionedJid,
} : {});
  }
};
handler.help = ['gay2', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map((v) => v + ' @tag | nombre');
handler.tags = ['calculator'];
handler.command = /^gay2|lesbiana|pajero|pajera|puto|puta|manco|manca|rata|prostituta|prostituto/i;
export default handler;
