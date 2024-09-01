let handler = async (m, { conn, text, usedPrefix, command }) => {
let url = 'https://telegra.ph/file/3d61e3c13261535939874.png'
    await conn.sendMessage(m.chat, { react: { text: '🍞', key: m.key }})
    await conn.sendMessage(m.chat, { image: { url: url }, caption: `Tostadas` }, { quoted: m })
}
handler.command = ['tostadas']
handler.tags = ['randomi']
export default handler