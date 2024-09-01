let handler = async (m, { conn, text, usedPrefix, command }) => {
let url = 'https://telegra.ph/file/04e81d14d4f25c2812156.jpg'
    await conn.sendMessage(m.chat, { react: { text: '🥺', key: m.key }})
    await conn.sendMessage(m.chat, { image: { url: url }, caption: `🥺` }, { quoted: m })
}
handler.command = ['emocat', 'simpemocat', 'simpemoc']
handler.tags = ['randomi']
export default handler