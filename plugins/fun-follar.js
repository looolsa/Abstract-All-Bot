const handler = async (m, { conn, command, text }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!who) throw `Ingresa el tag de alguien o responde a un mensaje`;
    const links = [
        'https://telegra.ph/file/9d65cba10aeb1a5dbb54d.mp4',
        'https://telegra.ph/file/3661aa2e59bf5ddb62e19.mp4',
        'https://telegra.ph/file/14f628bc05bf7dcadf594.mp4',
        'https://telegra.ph/file/9bcd17b53273b103450e7.mp4',
        'https://telegra.ph/file/2d3662225ebd9c3f195f7.mp4',
        'https://telegra.ph/file/ff3021c0e3881c4fbad9b.mp4',
        'https://telegra.ph/file/8e53339381569fea68de7.mp4',
        'https://telegra.ph/file/483f82406f6d99cdd8103.mp4',
        'https://telegra.ph/file/10152525fe306bf3fa199.mp4',
        'https://telegra.ph/file/3789175fbbfde972c711c.mp4',
        'https://telegra.ph/file/dcd26cb13193bcd489a8d.mp4',
        'https://telegra.ph/file/164f7d09387c1ec608925.mp4'

    ]
    
    const mmsg = [
        'LE DESTROZÓ EL CULO A',
        'LE ENTERRÓ LA VERGA A',
        'LE DIÓ UNA METIDA DE RIATA A',
        'LE PLANTÓ VARIAS VECES LA VERGA EN LA COLA A',
        'SE FOLLÓ Y DESTROZÓ A',
        'SE VIOLÓ Y SE PENETRÓ VARIAS VECES A',
        'LE DEJÓ EL ANO SANGRADO A',
        'LE PENETRÓ EL CULITO A',
        'TUVO UNA NOCHE PASIONAL CON',
        'SACIÓ SUS GANAS CON'
    ]
    
    let url = pickRandom(links);
const caption = `*[ 🔥 ] @${m.sender.split('@')[0]} `+ mmsg.getRandom() +` @${who.split('@')[0]}*`;
	if (!who) throw `Pon el tag`;
	await conn.sendMessage(m.chat, { video: { url:url }, gifPlayback: true, caption: caption, mentions: conn.parseMention(caption) }, m);
};
handler.command = /^(fuck|follar|destrozar|penetrar)$/i;
export default handler
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }