const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('*[ ⚕️ ] _Chat baneado con éxito._* _El bot dejará de responder a los comandos utilizados._');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^banchat$/i;
handler.rowner = true;
export default handler;
