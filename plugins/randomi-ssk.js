let handler = async (m, { conn, text, usedPrefix, command }) => {
let url = 'https://telegra.ph/file/f94cb55f6a61e05dfad40.png'
    await conn.sendMessage(m.chat, { react: { text: '🐱', key: m.key }})
    await conn.sendMessage(m.chat, { image: { url: url }, caption: `SsksksksjwjaSKEN
QNKSSKSKKSKS
KSkkskskwkqjqn
qnbdKAKAPJBB
NKLWKWKQkaka
jqu` }, { quoted: m })
}
handler.command = ['ssk']
handler.tags = ['randomi']
export default handler