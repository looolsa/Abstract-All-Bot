const handler = async (m, { conn, command, text }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!who) throw `Ingresa el tag de alguien o responde a un mensaje`;
    const links = [
        'https://telegra.ph/file/a3b4c225c697c95d353f6.mp4',
        'https://telegra.ph/file/31715d9ff5e45bb3c6d13.mp4',
        'https://telegra.ph/file/76e6393a2997ed9d262d0.mp4',
        'https://telegra.ph/file/bafa0d3fe82683822307f.mp4',
        'https://telegra.ph/file/a7b4eb6dc786801629db5.mp4',
        'https://telegra.ph/file/08e4bf1c616c0aabafe67.mp4',
        'https://telegra.ph/file/7da082322d6f6f439277b.mp4',
        'https://telegra.ph/file/3cc5e852b07e20b3ff6b3.mp4',
        'https://telegra.ph/file/995c1fcb625ffe83a0045.mp4',
        'https://telegra.ph/file/97b616973b062663958db.mp4',
        'https://telegra.ph/file/613915bb5bc174614e062.mp4',
        'https://telegra.ph/file/2b4feea426593d18e6854.mp4'
    ]
    const mmscg = [
        'LE DIÓ UN BESO A',
        'SE BESUQUEÓ CON',
        'LE ROBÓ UN BESO A',
        'LE PLANTÓ UN BESOTE A'
    ]
    let url = pickRandom(links);
const caption = `*[ 💋 ] @${m.sender.split('@')[0]} `+ mmscg.getRandom()+` @${who.split('@')[0]}*`;
	if (!who) throw `Pon el tag`;
	await conn.sendMessage(m.chat, { video: { url:url }, gifPlayback: true, caption: caption, mentions: conn.parseMention(caption) }, m);
};
handler.command = /^(besote|besito|besar|beso|kiss)$/i;
export default handler
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }