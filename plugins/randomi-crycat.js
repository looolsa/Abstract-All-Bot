let handler = async (m, { conn, text, usedPrefix, command }) => {
let url = 'https://telegra.ph/file/de686f8a9cea224c374fe.jpg'
    await conn.sendMessage(m.chat, { react: { text: '😭', key: m.key }})
    await conn.sendMessage(m.chat, { image: { url: url }, caption: `😭` }, { quoted: m })
}
handler.command = ['cryc', 'crycat']
handler.tags = ['randomi']
export default handler