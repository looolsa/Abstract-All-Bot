const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`;
  let teks = `*💠 𝙷 𝙰 𝙱 𝙻 𝙴 𝙽,  𝙼 𝙴 𝙳 𝙸 𝙾 𝙲 𝚁 𝙴 𝚂.*\n\n❏ ${oi}\n\n❏ *𝙼 𝙴 𝙽 𝙲 𝙸 𝙾 𝙽 𝙰 𝙳 𝙾 𝚂:*\n`;
  for (const mem of participants) {
    teks += `┣➥ @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└*B̷y̷. 𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝-𝙰𝚕𝚕 - 𝙱𝚘𝚝\n\n*▌│█║▌║▌║║▌║▌║▌║█*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;