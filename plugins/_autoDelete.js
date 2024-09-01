export async function before(m, {conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let user = global.db.data.users[m.sender]
    let usuario = m.sender
    const death = user.akinator.sesi

    if (death === true) {
        if (isBotAdmin) {
        	await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: usuario }})
        } else if (!isBotAdmin) return 
    }
    return !0
}