import axios from 'axios';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import {mediafiredl} from '@bochilteam/scraper';

const handler = async (m, {conn, args, usedPrefix, command}) => {
    if (!args[0]) throw `*[ 💠 ] Ingresa un link de mediafire para proceder con la descarga.*\n\n_⚕️.- Ejemplo:_ *${usedPrefix}mediafire* https://www.mediafire.com/file/dp2ekit57pay5rs/FNaF_1_Remastered_v2.0.2_Android.apk/file`;
  try {
    const resEX = await mediafiredl(args[0]);
    let text = `╭━━━⊜ ⌊ \`\`\`Mediafire Downloader\`\`\` ⌉⊜━━━\n`
    text += `│  ≡ Nombre: ${resEX.filename}\n`
    text += `│  ≡ Peso: ${resEX.filesizeH}\n`
    text += `│  ≡ Tipo: ${resEX.ext}\n`
    text += `╰━━━━━━━━━━━━━━⊜\n`
    text += `  _• Enviando archivo . . . ._`

    await conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: 'https://youtube.com/watch?v=TMT9MNM-NHg',
                        mediaType: 2,
                        description: `💠.- Hey! You can follow me on ig.`,
                        title: `💠.- Lan say's: Thanks for all support.`,
                        body: `𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝-𝙰𝚕𝚕.`,          previewType: 0,
                        thumbnail: await (await fetch('https://telegra.ph/file/11c0098b4f55b2e548b90.png')).buffer(),
                        mediaUrl: 'https://www.instagram.com/lansg___/',
                        
                      }}
})
    await conn.sendFile(m.chat, resEX.url, resEX.filename, '', m, null, {mimetype: resEX.ext, asDocument: true});
  } catch {
    try {
      const res = await mediafireDl(args[0]);
      const {name, size, date, mime, link} = res;
      let text2 = `╭━━━⊜ ⌊ \`\`\`Mediafire Downloader - 2\`\`\` ⌉⊜━━━\n`
    text2 += `│  ≡ Nombre: ${name}\n`
    text2 += `│  ≡ Peso: ${size}\n`
    text2 += `│  ≡ Tipo: ${mime}\n`
    text2 += `╰━━━━━━━━━━━━━━⊜\n`
    text2 += `  _• Enviando archivo . . . ._`
      await conn.reply(m.chat, text2, m, {
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: 'https://www.instagram.com/lansg___/',
                        mediaType: 2,
                        description: `💠.- Hey! You can follow me on ig.`,
                        title: `💠.- Lan say's: Thanks for all support.`,
                        body: `𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝-𝙰𝚕𝚕.`,          previewType: 0,
                        thumbnail: await (await fetch('https://telegra.ph/file/11c0098b4f55b2e548b90.png')).buffer(),
                        mediaUrl: 'https://www.instagram.com/lansg___/',
                        
                      }}
})
      await conn.sendFile(m.chat, link, name, '', m, null, {mimetype: mime, asDocument: true});
    } catch {
      await m.reply(global.errori);
    }
  }
};
handler.help = ['mediafire'].map((v) => v + ' <url>');
handler.tags = ['dl'];
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i;
export default handler;

async function mediafireDl(url) {
  const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
  const $ = cheerio.load(res.data);
  const link = $('#downloadButton').attr('href');
  const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ', '').replaceAll('\n', '');
  const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
  const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ', '');
  let mime = '';
  const rese = await axios.head(link);
  mime = rese.headers['content-type'];
  return {name, size, date, mime, link};
}