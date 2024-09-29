import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch' 
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let user = global.db.data.users[m.sender]
let pp = imagen1
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

if (command == 'menustickers' || (command == 'menus')){
let menuX = `
┏┅┅┓ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┏┅┅┓
┣┱  🝃ɞ *𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝- 𝙰𝚕𝚕 ł 𝙱𝚘𝚝* ʚ🝃  ┲┫
┗┅┅┚ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┗┅┅┛

╔═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╕
║『 *𝚂 𝚃 𝙸 𝙲 𝙺 𝙴 𝚁 𝚂* 』
╠═══════════════╧══╕
╟⊰ 🝚 _${usedPrefix}s *<responder a imagen / video / enlace>*_
╟⊰ 🝚 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
╟⊰ 🝚 _${usedPrefix}sremovebg *<imagen>*_
╟⊰ 🝚 _${usedPrefix}attp *<texto>*_
╟⊰ 🝚 _${usedPrefix}attp2 *<texto>*_
╟⊰ 🝚 _${usedPrefix}attp3 *<texto>*_
╟⊰ 🝚 _${usedPrefix}ttp *<texto>*_
╟⊰ 🝚 _${usedPrefix}ttp2 *<texto>*_
╟⊰ 🝚 _${usedPrefix}ttp3 *<texto>*_
╟⊰ 🝚 _${usedPrefix}ttp4 *<texto>*_
╟⊰ 🝚 _${usedPrefix}ttp5 *<texto>*_
╟⊰ 🝚 _${usedPrefix}slap *<@tag>*_
╟⊰ 🝚 _${usedPrefix}qc <@tag>*_
╟⊰ 🝚 _${usedPrefix}dado_
╟⊰ 🝚 _${usedPrefix}wm *<packname> | <author>*_
╟⊰ 🝚 _${usedPrefix}stickermarker *<efecto> <imagen>*_
╟⊰ 🝚 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
╚═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╛
`.trim()
await conn.sendMessage(m.chat, {image: pp, caption: menuX}, {quoted: fkontak});
} 
    if (command == 'menujuegos' || (command == 'menujs')){
let menuX = `
┏┅┅┓ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┏┅┅┓
┣┱  🝃ɞ *𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝- 𝙰𝚕𝚕 ł 𝙱𝚘𝚝* ʚ🝃  ┲┫
┗┅┅┚ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┗┅┅┛

╔═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╕
║『 *𝙹 𝚄 𝙴 𝙶 𝙾 𝚂* 』
╠════════════╧══╕
╟⊰ ▶︎ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
╟⊰ ▶︎ _${usedPrefix}ppt *<papel / tijera /piedra>*_
╟⊰ ▶︎ _${usedPrefix}prostituto *<nombre / @tag>*_
╟⊰ ▶︎ _${usedPrefix}prostituta *<nombre / @tag>*_
╟⊰ ▶︎ _${usedPrefix}gay *<nombre / @tag>*_
╟⊰ ▶︎ _${usedPrefix}gay2 *<nombre / @tag>*_
╟⊰ ▶︎ _${usedPrefix}lesbiana *<nombre / @tag>*_
╟⊰ ▶︎ _${usedPrefix}pajero/a *<nombre / @tag>*_
╟⊰ ▶︎ _${usedPrefix}puto/a *<nombre / @tag>*_
╟⊰ ▶︎ _${usedPrefix}manco/a *<nombre / @tag>*_
╟⊰ ▶︎ _${usedPrefix}rata *<nombre / @tag>*_
╟⊰ ▶︎ _${usedPrefix}love *<nombre / @tag>*_
╟⊰ ▶︎ _${usedPrefix}doxear *<nombre / @tag>*_
╟⊰ ▶︎ _${usedPrefix}pregunta *<texto>*_
╟⊰ ▶︎ _${usedPrefix}suitpvp *<@tag>*_
╟⊰ ▶︎ _${usedPrefix}chupa *<@tag>*_
╟⊰ ▶︎ _${usedPrefix}marron *<@tag>*_
╟⊰ ▶︎ _${usedPrefix}cum *<@tag>*_
╟⊰ ▶︎ _${usedPrefix}kiss *<@tag>*_
╟⊰ ▶︎ _${usedPrefix}pat *<@tag>*_
╟⊰ ▶︎ _${usedPrefix}jalamela *<@tag>*_
╟⊰ ▶︎ _${usedPrefix}aplauso *<@tag>*_
╟⊰ ▶︎ _${usedPrefix}slot *<apuesta>*_
╟⊰ ▶︎ _${usedPrefix}ttt *<nombre de la sala>*_
╟⊰ ▶︎ _${usedPrefix}delttt_
╟⊰ ▶︎ _${usedPrefix}acertijo_
╟⊰ ▶︎ _${usedPrefix}simi *<texto>*_
╟⊰ ▶︎ _${usedPrefix}top *<texto>*_
╟⊰ ▶︎ _${usedPrefix}topgays_
╟⊰ ▶︎ _${usedPrefix}topotakus_
╟⊰ ▶︎ _${usedPrefix}formarpareja_
╟⊰ ▶︎ _${usedPrefix}verdad_
╟⊰ ▶︎ _${usedPrefix}reto_
╟⊰ ▶︎ _${usedPrefix}wordfind_
╚═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╛
`.trim()
await conn.sendMessage(m.chat, {image: pp, caption: menuX}, {quoted: fkontak});
}
    if (command == 'menufr' || (command == 'menufrases')) {
let menuX = `
┏┅┅┓ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┏┅┅┓
┣┱  🝃ɞ *𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝- 𝙰𝚕𝚕 ł 𝙱𝚘𝚝* ʚ🝃  ┲┫
┗┅┅┚ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┗┅┅┛

╔═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╕
║『 *𝙵 𝚁 𝙰 𝚂 𝙴 𝚂 ϟ 𝚃 𝙴 𝚇 𝚃 𝙾 𝚂* 』
╠═══════════════╧══╕
╟⊰➺ _${usedPrefix}piropo_
╟⊰➺ _${usedPrefix}consejo_
╟⊰➺ _${usedPrefix}fraseromantica_
╟⊰➺ _${usedPrefix}historiaromantica_
╚═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╛
`.trim()
await conn.sendMessage(m.chat, {image: pp, caption: menuX}, {quoted: fkontak});
}
    if (command == 'menugc' || (command == 'menugrupos')) {
let menuX = `
┏┅┅┓ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┏┅┅┓
┣┱  🝃ɞ *𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝- 𝙰𝚕𝚕 ł 𝙱𝚘𝚝* ʚ🝃  ┲┫
┗┅┅┚ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┗┅┅┛

╔═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╕
║『 *𝙶 𝚁 𝚄 𝙿 𝙾 𝚂* 』
╠════════════╧══╕
╟⊰ 🜒 _${usedPrefix}add *<numero>*_
╟⊰ 🜒 _${usedPrefix}kick *<@tag>*_
╟⊰ 🜒 _${usedPrefix}kick2 *<@tag>*_
╟⊰ 🜒 _${usedPrefix}kicknum *<texto>*_
╟⊰ 🜒 _${usedPrefix}listanum *<texto>*_
╟⊰ 🜒 _${usedPrefix}grupo *<abrir / cerrar>*_
╟⊰ 🜒 _${usedPrefix}grouptime *<opcion> <tiempo>*_
╟⊰ 🜒 _${usedPrefix}promote *<@tag>*_
╟⊰ 🜒 _${usedPrefix}demote *<@tag>*_
╟⊰ 🜒 _${usedPrefix}infogroup_
╟⊰ 🜒 _${usedPrefix}resetlink_
╟⊰ 🜒 _${usedPrefix}link_
╟⊰ 🜒 _${usedPrefix}invocar *<texto>*_
╟⊰ 🜒 _${usedPrefix}tag *<responder mensaje / texto>*_
╟⊰ 🜒 _${usedPrefix}setname *<texto>*_
╟⊰ 🜒 _${usedPrefix}setdesc *<texto>*_
╟⊰ 🜒 _${usedPrefix}setpp *<imagen>*_
╟⊰ 🜒 _${usedPrefix}setwelcome *<texto>*_
╟⊰ 🜒 _${usedPrefix}setbye *<texto>*_
╟⊰ 🜒 _${usedPrefix}hidetag *<texto>*, *<imagen>*, *<video>*, *<audio>*_
╟⊰ 🜒 _${usedPrefix}warn *<@tag>*_
╟⊰ 🜒 _${usedPrefix}unwarn *<@tag>*_
╟⊰ 🜒 _${usedPrefix}listwarn_
╟⊰ 🜒 _${usedPrefix}fantasmas_
╟⊰ 🜒 _${usedPrefix}destraba_
╟⊰ 🜒 _admins *<texto>* *(𝚄𝚜𝚘 𝚂𝚒𝚗 𝙿𝚛𝚎𝚏𝚒𝚓𝚘)*_
╚═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╛
`.trim()
await conn.sendMessage(m.chat, {image: pp, caption: menuX}, {quoted: fkontak});
}
    if (command == 'menuonoff' || (command == 'menued')) {
let menuX = `
┏┅┅┓ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┏┅┅┓
┣┱  🝃ɞ *𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝- 𝙰𝚕𝚕 ł 𝙱𝚘𝚝* ʚ🝃  ┲┫
┗┅┅┚ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┗┅┅┛

╔═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╕
║『 *𝙴 𝙽 𝙰 𝙱 𝙻 𝙴 ϟ 𝙳 𝙸 𝚂 𝙰 𝙱 𝙻 𝙴* 』
╠═══════════════╧══╕
╟⊰ ꖅ _${usedPrefix}enable/disable *welcome*_
╟⊰ ꖅ _${usedPrefix}enable/disable *modohorny*_
╟⊰ ꖅ _${usedPrefix}enable/disable *antilink*_
╟⊰ ꖅ _${usedPrefix}enable/disable *antilink2*_
╟⊰ ꖅ _${usedPrefix}enable/disable *detect*_
╟⊰ ꖅ _${usedPrefix}enable/disable *audios*_
╟⊰ ꖅ _${usedPrefix}enable/disable *autosticker*_
╟⊰ ꖅ _${usedPrefix}enable/disable *antiviewonce*_
╟⊰ ꖅ _${usedPrefix}enable/disable *antitoxic*_
╟⊰ ꖅ _${usedPrefix}enable/disable *antitraba*_
╟⊰ ꖅ _${usedPrefix}enable/disable *modoadmin*_
╟⊰ ꖅ _${usedPrefix}enable/disable *antiarabes*_
╚═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╛
`.trim()
await conn.sendMessage(m.chat, {image: pp, caption: menuX}, {quoted: fkontak});
}
    if (command == 'menudl' || (command == 'menudescargas')) {
let menuX = `
┏┅┅┓ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┏┅┅┓
┣┱  🝃ɞ *𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝- 𝙰𝚕𝚕 ł 𝙱𝚘𝚝* ʚ🝃  ┲┫
┗┅┅┚ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┗┅┅┛

╔═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╕
║『 *𝙳 𝙴 𝚂 𝙲 𝙰 𝚁 𝙶 𝙰 𝚂* 』
╠═══════════════╧══╕
╟⊰ 🝤 _${usedPrefix}play *<texto>*_
╟⊰ 🝤 _${usedPrefix}playvid *<texto>*_
╟⊰ 🝤 _${usedPrefix}pla *<texto>*_
╟⊰ 🝤 _${usedPrefix}plavid *<texto>*_
╟⊰ 🝤 _${usedPrefix}playd *<texto>*_
╟⊰ 🝤 _${usedPrefix}playvd *<texto>*_
╟⊰ 🝤 _${usedPrefix}ytmp3 *<enlace>*_
╟⊰ 🝤 _${usedPrefix}ytmp4 *<enlace>*_
╟⊰ 🝤 _${usedPrefix}gitclone *<enlace / link / url>*_
╟⊰ 🝤 _${usedPrefix}mediafire *<enlace / link / url>*_
╟⊰ 🝤 _${usedPrefix}gdrive *<enlace / link / url>*_
╟⊰ 🝤 _${usedPrefix}x *<enlace / link / url>*_
╟⊰ 🝤 _${usedPrefix}fb *<enlace / link / url>*_
╟⊰ 🝤 _${usedPrefix}ig *<enlace / link / url>*_
╟⊰ 🝤 _${usedPrefix}tiktok *<enlace / link / url>*_
╟⊰ 🝤 _${usedPrefix}dapk2 *<enlace / link / url>*_
╟⊰ 🝤 _${usedPrefix}imagen *<texto>*_
╟⊰ 🝤 _${usedPrefix}pinterest *<texto>*_
╟⊰ 🝤 _${usedPrefix}wallpaper *<texto>*_
╟⊰ 🝤 _${usedPrefix}xnxxdl *<enlace / link / url> (+18)*_
╟⊰ 🝤 _${usedPrefix}xvideosdl *<enlace / link / url> (+18)*_
╚═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╛
`.trim()
await conn.sendMessage(m.chat, {image: pp, caption: menuX}, {quoted: fkontak});
}
    if (command == 'menubuscadores' || (command == 'menubs')) {
let menuX = `
┏┅┅┓ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┏┅┅┓
┣┱  🝃ɞ *𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝- 𝙰𝚕𝚕 ł 𝙱𝚘𝚝* ʚ🝃  ┲┫
┗┅┅┚ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┗┅┅┛

╔═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╕
║『 *𝙱 𝚄 𝚂 𝙲 𝙰 𝙳 𝙾 𝚁 𝙴 𝚂* 』
╠═══════════════╧══╕
╟⊰ 🜤 _${usedPrefix}modapk *<texto>*_
╟⊰ 🜤 _${usedPrefix}google *<texto>*_
╟⊰ 🜤 _${usedPrefix}wikipedia *<texto>*_
╟⊰ 🜤 _${usedPrefix}ytsearch *<texto>*_
╟⊰ 🜤 _${usedPrefix}playstore *<texto>*_
╟⊰ 🜤 _${usedPrefix}xnxxsearch *<texto> (+18)*_
╟⊰ 🜤 _${usedPrefix}rule34 *<texto> (+18)*_
╚═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╛
`.trim()
await conn.sendMessage(m.chat, {image: pp, caption: menuX}, {quoted: fkontak});
}
    if (command == 'menuconvertidor' || (command == 'menucv')) {
let menuX = `
┏┅┅┓ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┏┅┅┓
┣┱  🝃ɞ *𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝- 𝙰𝚕𝚕 ł 𝙱𝚘𝚝* ʚ🝃  ┲┫
┗┅┅┚ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┗┅┅┛

╔═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╕
║『 *𝙲 𝙾 𝙽 𝚅 𝙴 𝚁 𝚃 𝙸 𝙳 𝙾 𝚁 𝙴 𝚂* 』
╠═══════════════╧══╕
╟⊰ 🝪 _${usedPrefix}toanime *<imagen>*_
╟⊰ 🝪 _${usedPrefix}togifaud *<video>*_
╟⊰ 🝪 _${usedPrefix}toimg *<sticker>*_
╟⊰ 🝪 _${usedPrefix}tomp3 *<video>*_
╟⊰ 🝪 _${usedPrefix}toptt *<video / audio>*_
╟⊰ 🝪 _${usedPrefix}tovideo *<sticker>*_
╟⊰ 🝪 _${usedPrefix}tts es *<texto>*_
╟⊰ 🝪 _${usedPrefix}tourl *<video / imagen / audio>*_
╚═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╛
`.trim()
await conn.sendMessage(m.chat, {image: pp, caption: menuX}, {quoted: fkontak});
}
    if (command == 'menuel' || (command == 'menuefectosl')) {
let menuX = `
┏┅┅┓ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┏┅┅┓
┣┱  🝃ɞ *𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝- 𝙰𝚕𝚕 ł 𝙱𝚘𝚝* ʚ🝃  ┲┫
┗┅┅┚ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┗┅┅┛

╔═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╕
║『 *𝙴 𝙵 𝙴 𝙲 𝚃 𝙾 𝚂 ϟ 𝙻 𝙾 𝙶 𝙾 𝚂* 』
╠═══════════════╧══╕
╟⊰ 🜳 _${usedPrefix}logos *<efecto> <texto>*_
╟⊰ 🜳 _${usedPrefix}logochristmas *<texto>*_
╟⊰ 🜳 _${usedPrefix}logocorazon *<texto>*_
╟⊰ 🜳 _${usedPrefix}ytcomment *<texto>*_
╟⊰ 🜳 _${usedPrefix}hornycard *<@tag>*_
╟⊰ 🜳 _${usedPrefix}simpcard *<@tag>*_
╟⊰ 🜳 _${usedPrefix}lolice *<@tag>*_
╟⊰ 🜳 _${usedPrefix}itssostupid_
╟⊰ 🜳 _${usedPrefix}pixelar_
╟⊰ 🜳 _${usedPrefix}blur_
╚═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╛
`.trim()
await conn.sendMessage(m.chat, {image: pp, caption: menuX}, {quoted: fkontak});
}
    if (command == 'menuefectosa' || (command == 'menuea')) {
let menuX = `
┏┅┅┓ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┏┅┅┓
┣┱  🝃ɞ *𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝- 𝙰𝚕𝚕 ł 𝙱𝚘𝚝* ʚ🝃  ┲┫
┗┅┅┚ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┗┅┅┛

╔═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╕
║『 *𝙴 𝙵 𝙴 𝙲 𝚃 𝙾 𝚂 ϟ 𝙰 𝚄 𝙳 𝙸 𝙾 𝚂* 』
╠═══════════════╧══╕
╟⊰ ☊ _${usedPrefix}bass_
╟⊰ ☊ _${usedPrefix}blown_
╟⊰ ☊ _${usedPrefix}deep_
╟⊰ ☊ _${usedPrefix}earrape_
╟⊰ ☊ _${usedPrefix}fast_
╟⊰ ☊ _${usedPrefix}fat_
╟⊰ ☊ _${usedPrefix}nightcore_
╟⊰ ☊ _${usedPrefix}reverse_
╟⊰ ☊ _${usedPrefix}robot_
╟⊰ ☊ _${usedPrefix}slow_
╟⊰ ☊ _${usedPrefix}smooth_
╟⊰ ☊ _${usedPrefix}tupai_
╚═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╛
`.trim()
await conn.sendMessage(m.chat, {image: pp, caption: menuX}, {quoted: fkontak});
}
    if (command == 'menutools' || (command == 'menutls')) {
let menuX = `
┏┅┅┓ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┏┅┅┓
┣┱  🝃ɞ *𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝- 𝙰𝚕𝚕 ł 𝙱𝚘𝚝* ʚ🝃  ┲┫
┗┅┅┚ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┗┅┅┛

╔═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╕
║『 *𝙷 𝙴 𝚁 𝚁 𝙰 𝙼 𝙸 𝙴 𝙽 𝚃 𝙰 𝚂* 』
╠═══════════════╧══╕
╟⊰ ☭ _${usedPrefix}chatgpt *<texto>*_
╟⊰ ☭ _${usedPrefix}delirius *<texto>*_
╟⊰ ☭ _${usedPrefix}openai *<texto>*_
╟⊰ ☭ _${usedPrefix}gpt4 *<texto>*_  
╟⊰ ☭ _${usedPrefix}copilot *<texto>*_
╟⊰ ☭ _${usedPrefix}gemini *<texto>*_
╟⊰ ☭ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
╟⊰ ☭ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
╟⊰ ☭ _${usedPrefix}read *<imagen / video>*_
╟⊰ ☭ _${usedPrefix}clima *<país> <ciudad>*_
╟⊰ ☭ _${usedPrefix}encuesta *<texto1|texto2...>*_
╟⊰ ☭ _${usedPrefix}afk *<motivo>*_
╟⊰ ☭ _${usedPrefix}ocr *<responde a imagen>*_
╟⊰ ☭ _${usedPrefix}hd *<responde a imagen>*_
╟⊰ ☭ _${usedPrefix}acortar *<enlace / link / url>*_
╟⊰ ☭ _${usedPrefix}calc *<operacion math>*_
╟⊰ ☭ _${usedPrefix}del *<mensaje>*_
╟⊰ ☭ _${usedPrefix}whatmusic *<audio>*_
╟⊰ ☭ _${usedPrefix}lyrics *<canción>*_
╟⊰ ☭ _${usedPrefix}readqr *<imagen (QR)>*_
╟⊰ ☭ _${usedPrefix}qrcode *<texto>*_
╟⊰ ☭ _${usedPrefix}readmore *<texto1 | texto2>*_
╟⊰ ☭ _${usedPrefix}styletext *<texto>*_
╟⊰ ☭ _${usedPrefix}horario_
╟⊰ ☭ _${usedPrefix}traducir *<idioma> <texto>*_
╚═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╛
`.trim()
await conn.sendMessage(m.chat, {image: pp, caption: menuX}, {quoted: fkontak});
}
       if (command == 'menurpg' || (command == 'menueconomia')) {
let menuX = `
┏┅┅┓ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┏┅┅┓
┣┱  🝃ɞ *𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝- 𝙰𝚕𝚕 ł 𝙱𝚘𝚝* ʚ🝃  ┲┫
┗┅┅┚ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┗┅┅┛

╔═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╕
║『 *𝚁 𝙿 𝙶 - 𝙴 𝙲 𝙾 𝙽 𝙾 𝙼 𝙸́ 𝙰* 』
╠═══════════════╧══╕
╟⊰ ⛨ _${usedPrefix}balance_
╟⊰ ⛨ _${usedPrefix}lb_
╟⊰ ⛨ _${usedPrefix}perfil_
╟⊰ ⛨ _${usedPrefix}heal_
╟⊰ ⛨ _${usedPrefix}levelup_
╟⊰ ⛨ _${usedPrefix}verificar_
╟⊰ ⛨ _${usedPrefix}myns_
╟⊰ ⛨ _${usedPrefix}buy_
╟⊰ ⛨ _${usedPrefix}buyall_
╟⊰ ⛨ _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
╟⊰ ⛨ _${usedPrefix}robar *<cantidad> <@tag>*_
╟⊰ ⛨ _${usedPrefix}minar_
╟⊰ ⛨ _${usedPrefix}minar2_
╟⊰ ⛨ _${usedPrefix}work_
╟⊰ ⛨ _${usedPrefix}chamba_
╟⊰ ⛨ _${usedPrefix}cazar_
╟⊰ ⛨ _${usedPrefix}cofre_
╟⊰ ⛨ _${usedPrefix}adventure_
╟⊰ ⛨ _${usedPrefix}claim_
╟⊰ ⛨ _${usedPrefix}unreg *<numero de serie>*_
╚═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╛
`.trim()
await conn.sendMessage(m.chat, {image: pp, caption: menuX}, {quoted: fkontak});
}
       if (command == 'menuowner' || (command == 'menumods')) {
let menuX = `
┏┅┅┓ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┏┅┅┓
┣┱  🝃ɞ *𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝- 𝙰𝚕𝚕 ł 𝙱𝚘𝚝* ʚ🝃  ┲┫
┗┅┅┚ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┗┅┅┛

╔═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╕
║『 *𝙾 𝚆 𝙽 𝙴 𝚁 ϟ 𝙼 𝙾 𝙳 ' 𝚂* 』
╠═══════════════╧══╕
╟⊰ 🜲 _${usedPrefix}setprefix *<prefijo>*_
╟⊰ 🜲 _${usedPrefix}resetprefix_
╟⊰ 🜲 _${usedPrefix}desactivarwa *<numero>*_
╟⊰ 🜲 _${usedPrefix}leavegc_
╟⊰ 🜲 _${usedPrefix}cajafuerte_
╟⊰ 🜲 _${usedPrefix}block *<@tag / numero>*_
╟⊰ 🜲 _${usedPrefix}unblock *<@tag / numero>*_
╟⊰ 🜲 _${usedPrefix}blocklist_
╟⊰ 🜲 _${usedPrefix}autoadmin_
╟⊰ 🜲 _${usedPrefix}enable/disable *restrict*_
╟⊰ 🜲 _${usedPrefix}enable/disable *autoread*_
╟⊰ 🜲 _${usedPrefix}enable/disable *public*_
╟⊰ 🜲 _${usedPrefix}enable/disable *pconly*_
╟⊰ 🜲 _${usedPrefix}enable/disable *gconly*_
╟⊰ 🜲 _${usedPrefix}enable/disable *anticall*_
╟⊰ 🜲 _${usedPrefix}enable/disable *antiprivado*_
╟⊰ 🜲 _${usedPrefix}enable/disable *modejadibot*_
╟⊰ 🜲 _${usedPrefix}banlist_
╟⊰ 🜲 _${usedPrefix}banchat_
╟⊰ 🜲 _${usedPrefix}unbanchat_
╟⊰ 🜲 _${usedPrefix}banuser *<@tag>*_
╟⊰ 🜲 _${usedPrefix}unbanuser *<@tag>*_
╟⊰ 🜲 _${usedPrefix}reset *<@tag>*_
╟⊰ 🜲 _${usedPrefix}death *<@tag>*_
╟⊰ 🜲 _${usedPrefix}añadirxp *<@tag>*_
╟⊰ 🜲 _${usedPrefix}dardiamantes *<@tag>*_
╟⊰ 🜲 _${usedPrefix}bc *<texto>*_
╟⊰ 🜲 _${usedPrefix}bcchats *<texto>*_
╟⊰ 🜲 _${usedPrefix}bcgc *<texto>*_
╟⊰ 🜲 _${usedPrefix}bcgc2 *<texto>*, *<audio>*, *<imagen>*, *<video>*_
╟⊰ 🜲 _${usedPrefix}bcbot *<texto>*_
╟⊰ 🜲 _${usedPrefix}msg *<texto>*_
╟⊰ 🜲 _${usedPrefix}addprem, 2, 3, 4 *<@tag> <tiempo>*_
╟⊰ 🜲 _${usedPrefix}delprem *<@tag>*_
╟⊰ 🜲 _${usedPrefix}cleartpm_
╟⊰ 🜲 _${usedPrefix}restart_
╟⊰ 🜲 _${usedPrefix}update_
╟⊰ 🜲 _${usedPrefix}setppbot *<responder a imagen>*_
╟⊰ 🜲 _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
╟⊰ 🜲 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
╟⊰ 🜲 _${usedPrefix}listcmd_
╚═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╛
`.trim()
await conn.sendMessage(m.chat, {image: pp, caption: menuX}, {quoted: fkontak});
}
       if (command == 'menuinfobot' || (command == 'menuib')) {
let menuX = `
┏┅┅┓ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┏┅┅┓
┣┱  🝃ɞ *𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝- 𝙰𝚕𝚕 ł 𝙱𝚘𝚝* ʚ🝃  ┲┫
┗┅┅┚ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┗┅┅┛

┍⊰᯽⊱┈──╌❊ㅤ⇑ㅤ❊╌──┈⊰᯽⊱
│『 *𝙸 𝙽 𝙵 𝙾 ♮ 𝙱 𝙾 𝚃* 』
┝⊰᯽⊱┈┈┈┈─────┴┈─┐
├ ✇ _${usedPrefix}clog_
├ ✇ _${usedPrefix}terminosycondiciones_
├ ✇ _${usedPrefix}owner_
├ ✇ _${usedPrefix}listprem_
├ ✇ _${usedPrefix}grupos_
├ ✇ _${usedPrefix}grouplist_
├ ✇ _${usedPrefix}speedtest_
├ ✇ _${usedPrefix}script_
├ ✇ _Bot *(𝚄𝚜𝚘 𝚂𝚒𝚗 𝙿𝚛𝚎𝚏𝚒𝚓𝚘)*_
┕⊰᯽⊱┈──╌❊ㅤ⇓ㅤ❊╌──┈⊰᯽⊱
`.trim()
await conn.sendMessage(m.chat, {image: pp, caption: menuX}, {quoted: fkontak});
}
    if (command == 'menu7') {
let menuX = `👻 Hola! *${username}*\n
XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
`.trim()
await conn.sendMessage(m.chat, {image: pp, caption: menuX}, {quoted: fkontak});}
}
handler.help = ['menu0', 'menu3', 'menu4']
handler.tags = ['main']
handler.command = ['menus', 'menustickers', 'menujuegos', 'menujs', 'menufr', 'menufrases', 'menugc', 'menugrupos', 'menuonoff', 'menued', 'menudl', 'menudescargas', 'menubs', 'menubuscadores', 'menuconvertidor', 'menucv', 'menuefectosl', 'menuel', 'menuefectosa', 'menurpg', 'menueconomia', 'menuea', 'menutools', 'menutls', 'menuowner', 'menumods', 'menuinfobot', 'menuib', 'menu7'] 
handler.exp = 50
export default handler