import {createHash} from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, participants, isPrems}) => {
  let pp = 'https://telegra.ph/file/09d9c69e2e15c49185906.jpg';
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  if (!(who in global.db.data.users)) throw `El usuario que está mencionando no está registrado en mi base de datos`;
  try {
    pp = await conn.profilePictureUrl(who);
  } catch (e) {
  } finally {
    const {name, limit, lastclaim, registered, regTime, age, premiumTime} = global.db.data.users[who];
    const username = conn.getName(who);
    const prem = global.prems.includes(who.split `@` [0]);
    const sn = createHash('md5').update(who).digest('hex');
    const str = `*[ 💠 ] _Datos del usuario:_*

*▫️.- Nombre: ${username}* ${registered ? '*(' + name + ')* ': ''}
*▫️.- Número:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*▫️.- Link:* wa.me/${who.split`@`[0]}* ${registered ? '\n*▫️.- Edad:* ' + age + ' años' : ''}
*▫️.- Diamantes: ${limit}*
*▫️.- Usuario registrado: ${registered ? 'Si': 'No'}*
*▫️.- Usuario premium: ${premiumTime > 0 ? 'Si' : (isPrems ? 'Si' : 'No') || ''}*

*🔹.- Número de serie:*
${sn}`;
    conn.sendMessage(m.chat, {image: {url: pp}, caption: str}, {quoted: m});
  }
};
handler.help = ['profile [@user]'];
handler.tags = ['xp'];
handler.command = /^prf|perfil|profile?$/i;
export default handler;