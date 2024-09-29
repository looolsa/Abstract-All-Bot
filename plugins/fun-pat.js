const handler = async (m, { conn, command, text }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!who) throw `Ingresa el tag de alguien o responde a un mensaje`;
    const links = [
        'https://telegra.ph/file/fdcbd8129243b0e96d923.mp4',
        'https://telegra.ph/file/c732aca2fbd74dd2e8e87.mp4',
        'https://telegra.ph/file/e85da5188670bb516836a.mp4',
        'https://telegra.ph/file/3aca81cc00d13723552b6.mp4',
        'https://telegra.ph/file/05b0e1826236d21f1816d.mp4',
        'https://telegra.ph/file/e54e33ce2e99bc87eb18a.mp4',
        'https://telegra.ph/file/d42cb394491846d9a31d3.mp4',
        'https://telegra.ph/file/a0b492878e05dfaa7b86d.mp4',
        'https://telegra.ph/file/6d7617b936139d9d907fe.mp4',
        'https://telegra.ph/file/db4b13934026893eef4db.mp4',
        'https://telegra.ph/file/1f8e8c7214068714de5e0.mp4',
        'https://telegra.ph/file/05328796e281b91d76500.mp4',
        'https://telegra.ph/file/b0bab5129e29d1be91517.mp4',
        'https://telegra.ph/file/733b05baeebfc58dbd581.mp4',
        'https://telegra.ph/file/78364d8173c46e4634410.mp4',
        'https://telegra.ph/file/8d6036a8d97bc8fb33fb4.mp4'
    ]
    let mmsg = [
        ' LE DIÓ UNA PALMADITA A ',
        ' ACARICIÓ A ',
    ]
    let url = pickRandom(links);
const caption = `*[ 🕊️ ] @${m.sender.split('@')[0]}` + mmsg.getRandom() + `@${who.split('@')[0]}*`;
	if (!who) throw `Pon el tag`;
	await conn.sendMessage(m.chat, { video: { url:url }, gifPlayback: true, caption: caption, mentions: conn.parseMention(caption) }, m);
};
handler.command = /^(pat|palmaditas|cariños|mimos|patt)$/i;
export default handler
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }