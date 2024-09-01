import uploadImage from '../lib/uploadImage.js';
import {sticker} from '../lib/sticker.js';
import MessageType from '@whiskeysockets/baileys';
const effects = ['greyscale', 'invert', 'brightness', 'threshold', 'sepia', 'red', 'green', 'blue', 'blurple', 'pixelate', 'blur'];

const handler = async (m, {conn, usedPrefix, text}) => {
  const effect = text.trim().toLowerCase();
  if (!effects.includes(effect)) {
    throw `
*[ 💠 ] _Responde a la imágen que deseas convertir en sticker con filtro._*

*⚕️.- Ejemplo:* ${usedPrefix}stickermaker *<filtro>* 

*🔱.- Efectos disponibes:*
${effects.map((effect) => `_> ${effect}_`).join('\n')}
`.trim();
  }
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw '*[ 💠 ] Responde a una imágen.*';
  if (!/image\/(jpe?g|png)/.test(mime)) throw `*[ ⚕️ ] Formato no compatible.* Intenta nuevamente.`;
  const img = await q.download();
  const url = await uploadImage(img);
  const apiUrl = global.API('https://some-random-api.com/canvas/', encodeURIComponent(effect), {
    avatar: url,
  });
  try {
    const stiker = await sticker(null, apiUrl, global.packname, global.author);
    conn.sendFile(m.chat, stiker, null, {asSticker: true});
  } catch (e) {
    m.reply('*[ ⚠️ ] _Conversión fallida..._*\n\n*_Se enviará una imágen en su lugar..._*');
    await conn.sendFile(m.chat, apiUrl, 'image.png', null, m);
  }
};
handler.help = ['stickfilter (caption|reply media)'];
handler.tags = ['General'];
handler.command = /^(stickerfilter|stikerfilter|sfilter|sf)$/i;
export default handler;
