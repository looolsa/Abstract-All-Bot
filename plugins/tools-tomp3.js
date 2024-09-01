import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) throw `*[ 💠 ] Responde a la nota de voz, o video que deseas convertir en mp3.*`;
  const media = await q.download();
  if (!media) throw '*[ 💠 ] Ocurrió un error.* _Intenta nuevamente_';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw global.errori;
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.alias = ['tomp3', 'toaudio'];
handler.command = /^to(mp3|audio)$/i;
export default handler;
