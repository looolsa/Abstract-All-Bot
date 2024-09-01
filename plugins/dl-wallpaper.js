import {wallpaper} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[ 💠 ] Ingresa alguna petición.*\n\n_⚕️.- Ejemplo:_ *${usedPrefix + command} Paisaje*`;
  const res = await wallpaper(text);
  const img = res[Math.floor(Math.random() * res.length)];
  conn.sendFile(m.chat, img, 'error.jpg', `*[ 💠 ] Resultado de: ${text}*`, m);
};
handler.help = ['', '2'].map((v) => 'wallpaper' + v + ' <query>');
handler.tags = ['downloader'];
handler.command = /^(wp|wallpaper2?)$/i;
export default handler;