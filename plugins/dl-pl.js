let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {

  if (!args || !args[0]) throw `*[ 💠 ] Complementa tu peticion con algún enlace de YouTube.*\n_(Puedes hacer una búsqueda utilizando el comando ${usedPrefix}yts)_
 *⚕️.- Ejemplo:* _.pl_ https://youtu.be/a5i-KdUQ47o?si=7ubPnE8qkKRADw1J`;
  if (!args[0].match(/youtu/gi)) throw `*[ 💠 ] Asegúrate de ingresar un enlace de YouTube.*`;
  
 let chat = global.db.data.chats[m.chat]
 await conn.sendMessage(m.chat, { react: { text: '⚕️', key: m.key }})
 let res = await ytmp33(args[0]);
conn.sendMessage(m.chat, { audio: { url: res.resultados.descargar }, gifPlayback: true, mimetype: "audio/mpeg" }, {  quoted: m })
await conn.sendMessage(m.chat, { react: { text: '💠', key: m.key }})
};
handler.tags = ['dl']
handler.command = ['pl', 'yta']
export default handler