const handler = async (m, {conn, participants, usedPrefix, command}) => {
  const BANtext = `*[ ⚕️ ] Etiqueta o responde al usuario que será baneado.*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, {mentions: conn.parseMention(BANtext)});
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  else who = m.chat;
  const users = global.db.data.users;
  users[who].banned = true;
  m.reply('*[ ⚕️ ] _Usuario baneado con éxito._* _El bot hará caso omiso a todos los comandos ingresados por el usuario._');
};
handler.command = /^banuser$/i;
handler.rowner = true;
export default handler;
