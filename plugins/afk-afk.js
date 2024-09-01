const handler = async (m, {text}) => {
  const user = global.db.data.users[m.sender];
  user.afk = + new Date;
  user.afkReason = text;
  m.reply(`*[ 💠 ] Nombre:* ${conn.getName(m.sender)}\n\n_El usuario permanecerá inactivo, favor de no molestarlo._\n\n*⚕️-. Motivo${text ? ': ' + text : ''}*`);
};
handler.help = ['afk [alasan]'];
handler.tags = ['main'];
handler.command = /^afk$/i;
export default handler;
