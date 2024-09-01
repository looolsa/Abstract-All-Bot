export async function before(m, { conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0;
    if (!m.isGroup) return !1;

    const gatoRegex = /dios/i;

    if (gatoRegex.test(m.text)) {
        await conn.sendFile(m.chat, 'https://telegra.ph/file/2befce16c18d72a4d11a3.jpg', 'Dios.jpg', 'xdxdxdxdxdxdxdxdxdxd', m);
    }

    return !0;
}