import { youtubedl, youtubedlv2 } from '@bochilteam/scraper' 
import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
let handler = async (m, { text, conn, args, usedPrefix, command, fkontak }) => {
if (!args[0]) return conn.reply(m.chat, `XD\n*${usedPrefix + command} https://youtu.be/c5gJRzCi0f0*`, fkontak, m)
let youtubeLink = '';
if (args[0].includes('you')) {
youtubeLink = args[0]; 
} else {
const index = parseInt(args[0]) - 1;
if (index >= 0) {
if (Array.isArray(global.videoList) && global.videoList.length > 0) {
const matchingItem = global.videoList.find(item => item.from === m.sender);
if (matchingItem) {
if (index < matchingItem.urls.length) {
youtubeLink = matchingItem.urls[index];
} else {
throw `XDDD`;
}} else {
throw `XDDD`;
}} else {
throw `XD`;
}}}  
await conn.reply(m.chat, `No le sé al languaje`, fkontak, m)
try {
let q = '128kbps'
let v = youtubeLink
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
try {
let lolhuman = await fetch(`https://deliriusapi-official.vercel.app/download/ytmp3?&url=${youtubeLink}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
} catch {   
try {
let searchh = await yts(youtubeLink)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
conn.sendMessage(m.chat, { audio: { url: ress.url }, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })  
} catch (e) {
await conn.reply(m.chat, `XDDDDDDDDD`, fkontak, m)
console.log(`❗❗XD ${usedPrefix + command} ❗❗`)
console.log(e)}
}}}
handler.command = /^audio|fgmp3|dlmp3|getaud|yt(a|mp3)$/i
export default handler
/* let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {

  if (!args || !args[0]) throw `*[ 💠 ] Complementa tu peticion con algún enlace de YouTube.*\n_(Puedes hacer una búsqueda utilizando el comando ${usedPrefix}yts)_

 _⚕️.- Ejemplo:_ *${usedPrefix}${command}* https://youtu.be/a5i-KdUQ47o?si=7ubPnE8qkKRADw1J`;
  if (!args[0].match(/youtu/gi)) throw `*[ 💠 ] Asegúrate de ingresar un enlace de YouTube.*`;
  
 let chat = global.db.data.chats[m.chat]
 await conn.sendMessage(m.chat, { react: { text: '⚕️', key: m.key }})
 let res = await ytmp33(args[0]);
conn.sendMessage(m.chat, { audio: { url: res.resultados.descargar }, gifPlayback: true, mimetype: "audio/mpeg" }, {  quoted: m })
await conn.sendMessage(m.chat, { react: { text: '💠', key: m.key }})
};
handler.tags = ['dl']
handler.command = ['pl', 'yta', 'ytmp3']
export default handler */