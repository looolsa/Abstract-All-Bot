let handler = async (m, { conn, text, usedPrefix, command }) => {
let url = 'https://telegra.ph/file/a8aa3951206340edafbb3.jpg'
    await conn.sendMessage(m.chat, { react: { text: '😹', key: m.key }})
    await conn.sendMessage(m.chat, { image: { url: url }, caption: `ㅤㅤㅤja
                     Ja
          😹
Ja
                   Ja
     ja`}, { quoted: m })
}
handler.command = ['jaja', 'jjj']
handler.tags = ['randomi']
export default handler