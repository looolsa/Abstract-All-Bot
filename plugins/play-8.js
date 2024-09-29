import post from 'axios'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return m.reply(`Contoh *${usedPrefix + command} halal boy`)
    try {
    let x = (await yts.search(text)).all
    let { url } = x[Math.floor(Math.random() * x.length)]
    const { data } = await post("https://api.cobalt.tools/api/json", {
        url: url,
        filenamePattern: "basic",
        resolution: "480p"
    }, {
        headers: {
        Accept: "application/json",
        origin: "https://cobalt.tools",
        referer: "https://cobalt.tools/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, seperti Gecko) Chrome/128.0.0.0 Safari/537.36",
        }
    });
    let MannR = { audio: { url: data }, mimetype: "audio/ffmpeg", ptt: true }
    conn.sendMessage(m.chat, MannR, { quoted: m })
    } catch ({ message }) {
    return m.reply(message)
    }
}

handler.command = handler.help = ["play7"]
handler.tags = ["downloader"]
export default handler