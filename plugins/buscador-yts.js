import yts from 'yt-search';
import fs from 'fs';

const handler = async (m, {conn, text}) => {
  if (!text) throw `*[ 💠 ] Complementa tu búsqueda con algún título.* \n\n_⚕️.- Ejemplo:_ *.yts Andromeda Bridge*`;
  const results = await yts(text);
  const tes = results.all;
  const teks = results.all.map((v) => {
    switch (v.type) {
      case 'video': return `
*_🜰.- ${v.title}_*
*_🜲.- Link:_* ${v.url}
*_🜱.- Duración:_* ${v.timestamp}
*_🜰.- Subido:_* ${v.ago}
*_🜮.- Vistas:_* ${v.views}`;
    }
  }).filter((v) => v).join('\n\n*⊰᯽⊱┈───╌❊ㅤ⇓ㅤ❊╌────┈⊰᯽⊱*\n\n');
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m);
};
handler.help = ['ytsearch *<texto>*'];
handler.tags = ['search'];
handler.command = ['ytsearch', 'yts'];
export default handler;
