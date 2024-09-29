const handler = async (m, { conn, command, text }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!who) throw `Ingresa el tag de alguien o responde a un mensaje`
    const links = [
        'https://qu.ax/CXOV.mp4',
        'https://qu.ax/Wch.mp4',
        'https://qu.ax/LEyL.mp4',
        'https://qu.ax/tbNy.mp4',
        'https://qu.ax/FNvg.mp4',
        'https://qu.ax/UmqL.mp4',
        'https://qu.ax/xYfa.mp4',
        'https://qu.ax/cqXS.mp4',
        'https://qu.ax/Fplq.mp4',
        'https://qu.ax/HZTL.mp4',
        'https://qu.ax/bDUg.mp4',
        'https://qu.ax/kFOO.mp4',
        'https://qu.ax/HpRY.mp4',
        'https://qu.ax/GBUo.mp4',
        'https://qu.ax/TCWg.mp4',
        'https://qu.ax/dhOd.mp4',
        'https://qu.ax/uLzc.mp4',
        'https://qu.ax/GYFo.mp4',
        'https://qu.ax/HUQp.mp4',
        'https://qu.ax/ekie.mp4',
        'https://qu.ax/kFOO.mp4',
        'https://qu.ax/ZwvU.mp4'

    ]
    const mmsg = [
        ' SE ABRAZÓ CON  ',
        ' ABRAZÓ FUERTEMENTE A ',
        ' SE DIO MUCHOS ABRAZOS CON ',
        ' SE COMPADECIÓ Y ABRAZÓ A ',
        ' LE TOMÓ CARIÑO, Y ABRAZÓ A '
    ]
    let url = pickRandom(links);
    
const caption = `*[ 🫂 ] @${m.sender.split('@')[0]}` + mmsg.getRandom() + `@${who.split('@')[0]}*`
	await conn.sendMessage(m.chat, { video: { url:url }, gifPlayback: true, caption: caption, mentions: conn.parseMention(caption) }, m);
};
handler.command = /^(hug|abrazo|abrazar|abracito)$/i;
export default handler
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }