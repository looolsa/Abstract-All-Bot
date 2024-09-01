const handler = async (m, {conn, participants, command, usedPrefix}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ 💠 ] 𝙴𝚜𝚝𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚎𝚜𝚝á 𝚍𝚎𝚜𝚑𝚊𝚋𝚒𝚕𝚒𝚝𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒𝚘 𝚍𝚎𝚕 𝚋𝚘𝚝.*';
  const kicktext = `*[ 💠 ] Etiqueta o responde al mensaje de la persona que deseas eliminar.*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
  if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('*[ 💠 ] Etiqueta o responde al mensaje de la persona que deseas eliminar.*');
  if (m.message.extendedTextMessage.contextInfo.participant !== null && m.message.extendedTextMessage.contextInfo.participant != undefined && m.message.extendedTextMessage.contextInfo.participant !== '') {
    const mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid[0] ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : m.message.extendedTextMessage.contextInfo.participant;
    if (conn.user.jid.includes(mentioned)) return m.reply('*[ ⚕️ ] No seas idiota, no puedo eliminarme a mí mismo.*\n_Sáca a este número manualmente si así lo deseas._');
    const responseb = await conn.groupParticipantsUpdate(m.chat, [mentioned], 'remove');
    const exitoso1 = `[ ▫️ ] *@${mentioned.split('@')[0]} Fue eliminado exitosamente del chat.*`;
    const error1 = `*[ ▫️ ] @${mentioned.split('@')[0]} Es el creador del grupo.*`;
    const error2 = `*[ ▫️ ] @${mentioned.split('@')[0]} Ya ha abandonado este chat.*`;
    if (responseb[0].status === '200') m.reply(exitoso1, m.chat, {mentions: conn.parseMention(exitoso1)});
    else if (responseb[0].status === '406') m.reply(error1, m.chat, {mentions: conn.parseMention(error1)});
    else if (responseb[0].status === '404') m.reply(error2, m.chat, {mentions: conn.parseMention(error2)});
    else conn.sendMessage(m.chat, {text: `*[ ⚕️ ] Error inesperado.*_Saca manualmente a ese pendejo._`, mentions: [m.sender], contextInfo: {forwardingScore: 999, isForwarded: true}}, {quoted: m});
  } else if (m.message.extendedTextMessage.contextInfo.mentionedJid != null && m.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
    return;
  }
};
handler.help = ['kick'];
handler.tags = ['group'];
handler.command = /^(kick|echar|hechar|sacar)$/i;
handler.admin = handler.group = handler.botAdmin = true;
export default handler;

