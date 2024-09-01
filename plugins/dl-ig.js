let handler = async (m, { conn, args, usedPrefix, command }) => {
    
if (!args[0]) throw `*[ 💠 ] Ingrese un enlace de instagram para proceder con la descarga.*
*⚕️.- Ejemplo:* _.ig_ https://www.instagram.com/reel/C9NIuKKNzV7/?igsh=MW85NjRydWYycGk5eQ==`
let res = await fg.igdl(args[0])
conn.sendFile(m.chat, res.result[0].url, 'Video.mp4', '*[ 💠 ] Resultado.*', m)
    
}
handler.command = ['ig', 'igdl', 'instagram', 'igimg', 'igvid']
handler.diamond = true

export default handler