let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `*[ 💠 ] Complementa tu peticion con algún enlace de YouTube.*\n_(Puedes hacer una búsqueda utilizando el comando ${usedPrefix}yts)_

 _⚕️.- Ejemplo:_ *${usedPrefix}${command}* https://youtu.be/sBKR6aUorzA?si=TmC01EGbXUx2DUca`;
  if (!args[0].match(/youtu/gi)) throw `*[ 💠 ] Asegúrate de ingresar un enlace de YouTube.*`;
  
 let chat = global.db.data.chats[m.chat]
 await conn.sendMessage(m.chat, { react: { text: '⚕️', key: m.key }})
 let res = await ytmp44(args[0]);
conn.sendFile(m.chat, res.resultados.descargar, 'video.mp4', '', m)
await conn.sendMessage(m.chat, { react: { text: '💠', key: m.key }})
};
handler.tags = ['dl']
handler.command = ['plv', 'pl2', 'ytv', 'ytmp4']
export default handler