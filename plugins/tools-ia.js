import fetch from 'node-fetch';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openaiii = new OpenAIApi(configuration);
const handler = async (m, {conn, text, usedPrefix, command}) => {
// if (usedPrefix == 'a' || usedPrefix == 'A') return;
let syst = `Actuaras como un Bot de WhatsApp el cual fue creado por Lan, tu seras Abstract-All Bot.`

if (command == 'chatgpt') {
    if (!text) throw `*[ 💠 ] Ingresa una petición para interactuar con ChatGPT.*`;
try {
await conn.sendPresenceUpdate('recording', m.chat)

async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id/", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result;
} catch (error) {
console.error('Error al obtener esta pendejada:', error);
}}

let query = m.text;
let username = `${m.pushName}`;
let result = await luminsesi(query, username);
 await m.reply(result)
} catch {
try {
let gpt = await fetch(`https://deliriusapi-official.vercel.app/ia/gptweb?text=${text}`) 
let res = await gpt.json()
await m.reply(res.gpt)
} catch {
}}}

if (command == 'openai' || command == 'ia') {
    if (!text) throw `*[ 💠 ] Ingresa una petición para interactuar con OpenAI.*`;
conn.sendPresenceUpdate('recording', m.chat);
let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/ia2?text=${text}`)
let res = await gpt.json()
await m.reply(res.gpt)
}

if (command == 'gemini') {
    if (!text) throw `*[ 💠 ] Ingresa una petición para interactuar con Gemini.*`;
    conn.sendPresenceUpdate('recording', m.chat);
let gpt = await fetch(`https://deliriusapi-official.vercel.app/ia/gemini?query=${text}`)
let res = await gpt.json()
await m.reply(res.message)
}

if (command == 'copilot') {
    if (!text) throw `*[ 💠 ] Ingresa una petición para interactuar con Copilot.*`;
let gpt = await fetch(`https://deliriusapi-official.vercel.app/ia/bingia?query=${text}`)
let res = await gpt.json()
await m.reply(res.message)
}}
handler.help = ["chagpt", "ia", "openai", "gemini", "copilot"]
handler.tags = ["buscadores"]
handler.command = /^(openai|chatgpt|ia|ai|openai2|chatgpt2|ia2|gemini|copilot|bing)$/i;
export default handler;