const handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*[ 💠 ] Complementa tu peticion con alguna canción o video (Se recomienda especificar al autor)*.\n\n ⚕️.- Ejemplo *${usedPrefix + command} Survive - The Warning.*`;

    const randomReduction = Math.floor(Math.random() * 5) + 1;
    let search = await yts(text);
    let isVideo = /vid$/.test(command);
    let urls = search.all[0].url;
    let body = ` *『  𝙰 𝙱 𝚂 𝚃 𝚁 𝙰 𝙲 𝚃 - 𝙰 𝙻 𝙻  ł  𝙳 . 𝙻  』*

*☊.- 𝚃𝚒́𝚝𝚞𝚕𝚘: ${search.all[0].title}*
*🜚.- 𝚅𝚒𝚜𝚝𝚊𝚜:* ${search.all[0].views}
*🜵.- 𝙳𝚞𝚛𝚊𝚌𝚒𝚘́𝚗: ${search.all[0].timestamp}*
*🝓.- 𝙵𝚎𝚌𝚑𝚊 𝚍𝚎 𝙿𝚞𝚋𝚕𝚒𝚌𝚊𝚌𝚒𝚘́𝚗: ${search.all[0].ago}*
*🜲.- 𝚄𝚛𝚕:* ${urls}

*🝩.- 𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 ${isVideo ? '𝚟𝚒𝚍𝚎𝚘' : '𝚊𝚞𝚍𝚒𝚘'}*, 𝚊𝚐𝚞𝚊𝚛𝚍𝚊 𝚞𝚗 𝚖𝚘𝚖𝚎𝚗𝚝𝚘...`;
    
    conn.sendMessage(m.chat, { 
        image: { url: search.all[0].thumbnail }, 
        caption: body 
    },);

    let res = isVideo ? await ytmp44(urls) : await ytmp33(urls);
    let type = isVideo ? 'video' : 'audio';
    
    conn.sendMessage(m.chat, { 
        [type]: { url: res.resultados.descargar }, 
        mimetype: isVideo ? "video/mp4" : "audio/mpeg",
        gifPlayback: true
    }, { quoted: m });
}

handler.command = ['play', 'playvid'];
handler.help = ['play', 'playvid'];
handler.tags = ['dl'];
export default handler;