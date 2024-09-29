import { igdl } from 'ruhend-scraper';

const handler = async (m, { text, conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    return conn.reply(m.chat, `*[ 💠 ] Ingresa un enlace de Facebook para proceder con la descarga.*\n\n_⚕️.- Ejemplo:_ *${usedPrefix}fb* https://www.facebook.com/share/r/HgtwjWRzmq3xQJTU/?mibextid=D5vuizhttps://fb.watch/fOTpgn6UFQ/`, m);
  }

  let res;
    m.reply(global.wait)
  try {
    res = await igdl(args[0]);
  } catch (error) {
    return conn.reply(m.chat, '*[ 💠 ] Ocurrió un error al obtener los datos.*\n_Rectifica tu enlace._', m);
  }

  let result = res.data;
  if (!result || result.length === 0) {
    return conn.reply(m.chat, '*[ 💠 ] Error.*\n_No se encontraron resultados._', m);
  }

  let data;
  try {
    data = result.find(i => i.resolution === "720p (HD)") || result.find(i => i.resolution === "360p (SD)");
  } catch (error) {
    return conn.reply(m.chat, '*[ 💠 ] Error al procesar los datos.*', m);
  }

  if (!data) {
    return conn.reply(m.chat, '*[ 💠 ] No se encontró una resolución adecuada.*', m);
  }

  let video = data.url;
  try {
    await conn.sendMessage(m.chat, { video: { url: video }, caption: null, fileName: 'fb.mp4', mimetype: 'video/mp4' }, { quoted: m });
  } catch (error) {
    return conn.reply(m.chat, global.errori, m);
  }
};

handler.command = /^(facebook|fb|facebookdl|fbdl)$/i;

export default handler;       