const handler = async (m, { conn, command, text }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!who) throw `Ingresa el tag de alguien o responde a un mensaje`
    const links = [
        'https://qu.ax/qAqc.mp4',
        'https://qu.ax/TrQu.mp4',
        'https://qu.ax/Bgw.mp4',
        'https://qu.ax/ZSkR.mp4',
        'https://qu.ax/HLYk.mp4',
        'https://qu.ax/UdJT.mp4',
        'https://qu.ax/ptqG.mp4',
        'https://qu.ax/fRjn.mp4',
        'https://qu.ax/wkob.mp4',
        'https://qu.ax/YRio.mp4',
        'https://qu.ax/qWyg.mp4',
        'https://qu.ax/unqY.mp4',
        'https://qu.ax/gGCr.mp4'
    ]
    const mmsg = [
        ' SE LA CHUPÓ BIEN RICO A ',
        ' LE CROMÓ LA RIATOTA A ',
        ' LE RELAMIÓ EL FIERROTE A ',
        ' LE DIO UNA CROMADA A ',
        ' LE LIMPIÓ LA VERGA A CHUPADAS A ',
        ' LE CHUPÓ EL PENE HASTA DEJARLO LIMPIO A ',
        ' SUCCIONÓ BIEN RICO LA VERGA DE ',
        ' LE DIO UNAS CHUPADOTAS A ',
        ' CHUPÓ Y CHUPÓ, Y LA VERGA LE SECÓ A ',
        ' SUCCIONO DE LA MANERA MAS DECENTE LA VERGA DE ',
        ' SUJETÓ LA BASE Y SUCCIONÓ HASTA EL GLANDE DE '
    ]
    let url = pickRandom(links);
const caption = `*[ 🔥 ] @${who.split('@')[0]} ` + mmsg.getRandom() + `@${m.sender.split('@')[0]}*`
	await conn.sendMessage(m.chat, { video: { url:url }, gifPlayback: true, caption: caption, mentions: conn.parseMention(caption) }, m);
};
handler.command = /^(blowjob|mamele|chupamela|mamada|cromada)$/i;
export default handler
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }