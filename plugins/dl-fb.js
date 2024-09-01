import { facebookDl } from '../scrapers/scraper.js';
const handler = async (m, {conn, args, command, usedPrefix}) => {
 if (!args[0]) throw `*[ 💠] Ingresa un enlace de Facebook para proceder con la descarga.*\n\n*⚕️.- Ejemplo: ${usedPrefix + command}* https://www.facebook.com/share/r/HgtwjWRzmq3xQJTU/?mibextid=D5vuiz`;
let res = await facebookDl(args[0]);
   
let { title, hd } = res.result;
await conn.sendFile(m.chat, hd, title + '.mp4', `• ${title} 📥`, m);
};
handler.command = /^(facebook|fb|facebookdl|fbdl)$/i;
export default handler;