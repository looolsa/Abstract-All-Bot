export function before(m) {
  const user = global.db.data.users[m.sender];
  if (user.afk > -1) {
    m.reply(`
  *[ 💠 ] Bienvenido de vuelta*, ${conn.getName(m.sender)}
${user.afkReason ? ' *Motivo de inactividad:* ' + user.afkReason : ''}

*⚕️.- Tiempo transcurrido:* ${(new Date - user.afk).toTimeString()}
  `.trim());
    user.afk = -1;
    user.afkReason = '';
  }
  const jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
  for (const jid of jids) {
    const user = global.db.data.users[jid];
    if (!user) {
      continue;
    }
    const afkTime = user.afk;
    if (!afkTime || afkTime < 0) {
      continue;
    }
    const reason = user.afkReason || '';
    m.reply(`*[ 💠 ] Usuario inactivo.*  
${reason ? '*Motivo:* ' + reason : '*Motivo:* _Mimido._'}

*⚕️.- Tiempo transcurrido:* ${(new Date - afkTime).toTimeString()}
  `.trim());
  }
  return true;
}
