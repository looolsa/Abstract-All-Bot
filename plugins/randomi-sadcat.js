let handler = async (m, { conn, text, usedPrefix, command }) => {
let url = 'https://telegra.ph/file/f3e06e716a2b29bf32ec5.png'
    await conn.sendMessage(m.chat, { react: { text: '😿', key: m.key }})
    await conn.sendMessage(m.chat, { image: { url: url }, caption: `Sadcat 😿` }, { quoted: m })
}
handler.command = ['sadcat', 'sadc']
handler.tags = ['randomi']
export default handler