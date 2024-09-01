let handler = async (m, { conn, text, usedPrefix, command }) => {
let url = 'https://telegra.ph/file/1c1bacb608a1de5128e2a.png'
    await conn.sendMessage(m.chat, { react: { text: '🥺', key: m.key }})
    await conn.sendMessage(m.chat, { image: { url: url }, caption: `🥺` }, { quoted: m })
}
handler.command = ['cutecat', 'cutec', 'gatomensito']
handler.tags = ['randomi']
export default handler