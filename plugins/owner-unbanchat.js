const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('*[ 💠 ] _Este chat ha sido desbaneado con éxito._* _El bot responderá con normalidad a los comandos solicitados._');
};
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^unbanchat$/i;
handler.rowner = true;
export default handler;
