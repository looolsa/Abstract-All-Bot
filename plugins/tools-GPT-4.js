let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `*[ 💠 ] Ingresa una petición para interactuar con GPT-4*`;

const syms1 = `Actuaras como un Bot de WhatsApp.`
let a = await fetch(`https://api.cafirexos.com/api/chatgpt?text=${text}&name=${m.name}&prompt=${syms1}`)
let res = await a.json()
  
  await conn.sendMessage(m.chat, {
    text: res.resultado }, { quoted: m })
  
};
handler.command = handler.help = ['gpt4'];
handler.tags = ['tools'];
export default handler