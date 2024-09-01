let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `*[ 💠 ] Ingresa un enlace de Tiktok para proceder con la descarga.*
*⚕️.- Ejemplo:* _.tt https://vm.tiktok.com/ZMrY5dqet/_`;

if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*[ 💠 ] Aseguúrate de ingresar un enlace válido de TikTok.`;
    
let data = await fg.tiktok(`${args[0]}`);
let { title, play, duration } = data.result;
let { nickname } = data.result.author;

conn.sendFile(m.chat, `${play}`, `tiktok.mp4`, `*[ 💠 ] Resultado*.`, m);
}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
handler.diamond = 4
export default handler