import { googleImage, pinterest } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!db.data.chats[m.chat].modohorny && m.isGroup) throw global.adult;
    if (!text) throw `*⚠️ Ingresa un texto!*\n\n*🦀 Ejemplo: ${usedPrefix + command} Miku Hatsune*`
    const res = await (await googleImage('rule34 ' + text)).getRandom()
    conn.sendFile(m.chat, res, `${text}_rule34.jpg`, `*Resultado de: ${text}*`, m, null)
}
handler.help = ['rule34']
handler.tags = ['dl']
handler.command = ['rule34', 'r34', 'regla34']
export default handler