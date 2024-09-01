let handler = async (m, { conn, text, usedPrefix, command }) => {
let url = 'https://telegra.ph/file/b23325415f683fed92798.png'
    await conn.sendMessage(m.chat, { react: { text: '🙀', key: m.key }})
    await conn.sendMessage(m.chat, { image: { url: url }, caption: `NO MAMES, NO MAMES
AL CHILE NO MAMES` }, { quoted: m })
}
handler.command = ['nomames', 'nomamesnacnm']
handler.tags = ['randomi']
export default handler