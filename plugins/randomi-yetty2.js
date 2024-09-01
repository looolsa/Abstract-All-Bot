let handler = async (m, { conn, text, usedPrefix, command }) => {
let url = 'https://telegra.ph/file/859e83ecd63d824cb1022.jpg'
    await conn.sendMessage(m.chat, { react: { text: '👻', key: m.key }})
    await conn.sendMessage(m.chat, { image: { url: url }, caption: `Yetty 2 🧐` }, { quoted: m })
}
handler.command = ['yetty2', 'yetti2']
handler.tags = ['randomi']
export default handler