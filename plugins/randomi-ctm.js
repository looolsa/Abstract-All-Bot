let handler = async (m, { conn, text, usedPrefix, command }) => {
let url = 'https://telegra.ph/file/18740c62be781967b7e8d.png'
    await conn.sendMessage(m.chat, { react: { text: '💀', key: m.key }})
    await conn.sendMessage(m.chat, { image: { url: url }, caption: `*_Chinga tu madre_*`}, { quoted: m })
}
handler.command = ['ctm', 'chingatm']
handler.tags = ['randomi']
export default handler