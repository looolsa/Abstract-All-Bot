const toM = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata}) {
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  let b;
  do b = ps.getRandom();
  while (b === a);
    let mmsg = [
        ' Mis estudios dicen que ',
        ' He analizado que ',
        ' Me parece que ',
        ' Se piensa que ',
        ' Pues, ',
        ' Parece que '
    ]
    let mmsg2 = [
        ' debería casarse con ',
        ' debería contraer matrimonio con ',
        ' debería compartir lazos con ',
        ' podría casarse con ',
        ' necesita casarse con ',
    ]
    let mmsg3 = [
        ', hacen muy bonita pareja',
        ', harían buen matrimonio',
        ', se ven muy bien juntos',
        ', serían un orgullo como matrimonio',
        ', tal vez serían muy felices juntos',
        ', se ven muy lindos juntos'
    ]
    
  m.reply(`*[ 💍 ]` + mmsg.getRandom() + `${toM(a)}` + mmsg2.getRandom() + `${toM(b)}` + mmsg3.getRandom() + `.*`, null, {
    mentions: [a, b],
  });
    
}
handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['formarpareja', 'formarparejas'];
handler.group = true;
export default handler;
