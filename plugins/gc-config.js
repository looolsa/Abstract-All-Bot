const handler = async (m, {conn, args, usedPrefix, command}) => {
  const isClose = { // Switch Case Like :v
    'open': 'not_announcement',
    'close': 'announcement',
    'abierto': 'not_announcement',
    'cerrado': 'announcement',
    'abrir': 'not_announcement',
    'cerrar': 'announcement',
  }[(args[0] || '')];
  if (isClose === undefined) {
    throw `
*[ 💠 ] Error de formato.*

*⚕️-. Ejemplo: ${usedPrefix + command} abrir/cerrar*

`.trim();
  }
  await conn.groupSettingUpdate(m.chat, isClose);
  {m.reply('*[ 💠 ] Configuración aplicada.*');}
};
handler.help = ['group open / close', 'grupo abrir / cerrar'];
handler.tags = ['group'];
handler.command = /^(group|grupo|ano)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
