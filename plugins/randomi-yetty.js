let handler = async (m, { conn, text, usedPrefix, command }) => {
let url = 'https://telegra.ph/file/d6db0f15d39b9c2b07119.png'
    await conn.sendMessage(m.chat, { react: { text: '👻', key: m.key }})
    await conn.sendMessage(m.chat, { image: { url: url }, caption: `Yetty 🧐` }, { quoted: m })
}
handler.command = ['yetty', 'yetti']
handler.tags = ['randomi']
export default handler