let handler = async (m, { conn, text, usedPrefix, command }) => {
let url = 'https://telegra.ph/file/ed6bce82e619b065be6b7.jpg'
    await conn.sendMessage(m.chat, { react: { text: '🐱', key: m.key }})
    await conn.sendMessage(m.chat, { image: { url: url }, caption: `:3` }, { quoted: m })
}
handler.command = ['gatocagado']
handler.tags = ['randomi']
export default handler