const handler = async (m, {conn, text}) => {
  if (!text) throw '*[ 💠 ] Menciona al usuario que deseas desbanear*';
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*[ 💠 ] Menciona al usuario que deseas desbanear*';
  const users = global.db.data.users;
  users[who].banned = false;
  conn.reply(m.chat, `*[ 💠 ] _El usuario fue desbaneado con éxito._* _El bot volverá a responder a los comandos utilizados por el usuario_`, m);
};
handler.help = ['unbanuser'];
handler.tags = ['owner'];
handler.command = /^unbanuser$/i;
handler.rowner = true;
export default handler;
