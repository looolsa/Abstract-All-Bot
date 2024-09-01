let handler = async (m, { conn, usedPrefix, command }) => {
    if (!m.quoted) throw `*[ 💠 ] Responde al sticker que deseas convertir a imágen.*`
    let xx = m.quoted;
  conn.sendMessage(m.chat, { image: await xx.download(), caption: `*[ 💠 ] Resultado*` }, m)
        }
handler.help = ['toimg <sticker>']
handler.tags = ['sticker']
handler.command = ['toimg', 'jpg', 'aimg'] 
export default handler