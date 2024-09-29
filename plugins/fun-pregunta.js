const handler = async (m, {command, text}) => m.reply(`
*[ 💠 ] PREGUNTAS Y RESPUESTAS AL AZAR:*
  
*⚕️.- Cuestión:* ${text}
*▫️.- Respuesta:* ${['Si', 'Tal vez sí', 'Posiblemente', 'Probablemente no', 'No', 'Seguramente', 'Tal vez no', 'Quedaría como duda', 'No sabría deducirlo', 'Pues, suena erróneo', 'Pues, suena acertado', 'Podría decirse...', 'Digamos que sí', 'Digamos que no','Imposible'].getRandom()}
`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid,
} : {});
handler.help = ['pregunta <texto>?'];
handler.command = /^pregunta|preguntas|apakah$/i;
export default handler;
