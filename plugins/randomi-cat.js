import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  try {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const img = await res.json();
    const caption = `
*[ 💠 ]* _𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝 - 𝙰𝚕𝚕 - 𝙱𝚘𝚝_
`.trim();
    conn.sendFile(m.chat, img[0].url, 'cat.jpg', caption, m);
  } catch (e) {
    console.log(e);
    throw '*Error!*';
  }
};
handler.help = ['cat'];
handler.tags = ['randomi'];
handler.command = /^cat$/i;
handler.fail = null;
export default handler;
