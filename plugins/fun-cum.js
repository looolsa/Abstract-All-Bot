const handler = async (m, { conn, command, text }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    const links = [
        'https://telegra.ph/file/af8730d631d721927970f.mp4',
        'https://telegra.ph/file/7175b97490bbeb95276b5.mp4',
        'https://telegra.ph/file/ee3c5bc173690384a42b1.mp4',
        'https://telegra.ph/file/535de84dc4166509c61db.mp4',
        'https://telegra.ph/file/939c3923add0b8e20c1fd.mp4',
        'https://telegra.ph/file/bc06c50ebddc735505128.mp4',
        'https://telegra.ph/file/fbd442e200e66a684a578.mp4',
        'https://telegra.ph/file/7c5cb93349c7acf04838e.mp4',
        'https://telegra.ph/file/6bfd08ec9418dbc75fa38.mp4',
        'https://telegra.ph/file/76340e72d6ca207f363b4.mp4',
        'https://telegra.ph/file/a7adc360176eb8198925f.mp4'
    ]
    const mmsg = [
        ' HA EYACULADO EN ',
        ' SE HA CORRIDO ENCIMA DE ',
        ' AMBASIGNEÓ EN ',
        ' AMBATUKAMEÓ LA JETA DE ',
        ' BUSTEÓ EN LA CARA DE ',
        ' SE CORRIÓ BIEN MASCIZO ENCIMA DE ',
        ' LA JALÓ ACÁ BIEN RICO Y SE VINO EN ',
        ' HIZO UN FLAN DE LECHE Y SE LO ECHÓ A '
    ]
    let url = pickRandom(links);
const caption = `*[ 🔥 ] @${m.sender.split('@')[0]}` + mmsg.getRandom() + `@${who.split('@')[0]}*`
	if (!who) throw `Pon el tag`
	await conn.sendMessage(m.chat, { video: { url:url }, gifPlayback: true, caption: caption, mentions: conn.parseMention(caption) }, m);
};
handler.command = /^(cum)$/i;
export default handler
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }