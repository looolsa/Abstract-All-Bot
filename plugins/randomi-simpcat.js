let handler = async (m, { conn, text, usedPrefix, command }) => {
let url = 'https://telegra.ph/file/673d942b93abb2825cd22.jpg'
    await conn.sendMessage(m.chat, { react: { text: '🥺', key: m.key }})
    await conn.sendMessage(m.chat, { image: { url: url }, caption: `🥺` }, { quoted: m })
}
handler.command = ['simpc', 'simpcat', 'catc']
handler.tags = ['randomi']
export default handler