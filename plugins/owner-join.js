let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let handler = async (m, { conn, text, isMods, isOwner }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []
if (!code) throw `*[ 💠 ] Ingresa el comando con el enlace a tu grupo.*\n\n_⚕️.- Ejemplo:_ *.join https://chat.whatsapp.com/CN3YieShy2S3LnVRJ7aPPM*`
if ( isMods || isOwner || m.fromMe) {
m.reply(`*[ 💠 ] El bot se ha unido al grupo con éxito.*`)
await delay(1 * 1000)
let res = await conn.groupAcceptInvite(code)
} else {
const data = global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)
await delay(1 * 1000)
await m.reply(`*[ 💠 ] Su enlace fue enviado a mi creador para su verificación.*
_⚕️.- Tenga paciencia, mi creador suele tardar un poco en aprobar las solicitudes, y por si alguna razón, tu grupo nunca es aceptado, puede ser por las siguientes razones:_

*▫️.- El bot estuvo en tu chat y fue eliminado con anterioridad.*
*▫️.- Tu chat activó la aprobación de miembros y el número aún no es aceptado.*
*▫️.- El bot alcanzó el límite de chats grupales.*`) 
await delay(2 * 2000)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`*[ 💠 ] Nueva solicitud de ingreso:*\n\n*_⚕️.- Número solicitante:_*\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n*_▫️.- Enlace del grupo:_*\n ' + link, jid)}}
handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['owner']
handler.command = /^unete|join|nuevogrupo|unir|unite|unirse|entra|entrar$/i 
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
