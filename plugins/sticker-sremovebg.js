import uploadImage from '../lib/uploadImage.js';
import {sticker} from '../lib/sticker.js';


const handler = async (m, {conn, text}) => {
  const datas = global
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
    const img = await q.download();
    const url = await uploadImage(img);
    const sremovebg = global.API(`https://api.lolhuman.xyz/api/removebg?apikey=${lolkeysapi}&img=${url}`);
    const stickerr = await sticker(false, sremovebg, global.packname, global.author);
    conn.sendFile(m.chat, stickerr, 'sticker.webp', '', m, {asSticker: true});
  } catch (e) {
    m.reply('*[ 💠 ] Ocurrió un error, intente nuevamente.*');
  }
};
handler.command = /^s2|removeb|sr$/i;
export default handler;