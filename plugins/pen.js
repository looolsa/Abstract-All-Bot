const handler = async (m, { conn, command, text }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!text) throw `*[ 💠 ] Escribe el objeto, y la mención al usuario al que deseas meterle algo por el re-ojete*

*_⚕️.- Lista de objetos:_*
_▫️.- Pene._
_▫️.- Dildo en forma de dinosario._
_▫️.- Cargador._
_▫️.- Tubo de ensaye._
_▫️.- Tubo de PBC._
_▫️.- Matraz Erlenmeyer._
_▫️.- Tubo de escape._
_▫️.- Gato hidráulico._
_▫️.- Guitarra acústica._
_▫️.- Guitarra eléctrica._
_▫️.- Bajo acústico._
_▫️.- Bajo eléctrico._`;

const caption = `*[ 💋 ] @${m.sender.split('@')[0]} LE HA METIDO UN PENE A @${who.split('@')[0]}*`;

	if (!who) throw `Pon el tag`;
    if (m.text === 'Pene' || (m.text === 'pene')) {
        await conn.sendMessage(m.chat, { text: caption, mentions: conn.parseMention(caption) }, m);
    }
};
handler.command = /^(pen|e)$/i;
export default handler