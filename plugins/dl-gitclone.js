import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) throw `*[ 💠 ] Ingresa un link de GitHub.*\n\n_⚕️.- Ejemplo:_ *${usedPrefix + command}* https://github.com/looolsa/Abstract-All-Bot`;
  if (!regex.test(args[0])) throw '*[ 💠 ] Asegurate de ingresar el link correctamente.*';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`*[ 💠 ] Espera un momento.* _(Si el archivo no es enviado, puede ser porque es demasiado pesado, o no esté disponible)_`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.help = ['gitclone <url>'];
handler.tags = ['downloader'];
handler.command = /gitclone/i;
export default handler;
