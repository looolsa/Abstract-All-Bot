const handler = async (m, {conn, isPrems}) => {

  const user = global.db.data.users[m.sender];
  const exp = Math.floor(Math.random() * 50000);
  const time = global.db.data.users[m.sender].lastchamba + 15000;
  if (new Date - global.db.data.users[m.sender].lastchamba < 15000) throw `*[ 💠 ] Perate ${msToTimee(time - new Date())} pa chambiar*`;
let texto = `*[ 🔥 ] ${pickRandom(global.chamba)} ${exp} XP*`
conn.reply(m.chat, texto, m, { mentions: await conn.parseMention(texto) })
    global.db.data.users[m.sender].exp += exp;
  global.db.data.users[m.sender].lastchamba = new Date * 1;
};
handler.help = ['chamba'];
handler.tags = ['xp'];
handler.command = ['chamba', 'chambear', 'chambita'];
handler.fail = null;
export default handler;

function msToTimee(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return minutes + ' m ' + seconds + ' s ';
}


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.chamba = ['Trabajas como scort esquinero y ganas:',
  'Vendes foto de tus patas en onlyfans y ganas:',
  'Trabajas como catador de semen y ganas:',
  'Te vuelves colaborador de Abstract-All, abusan de tu anito y ganas:',
  'Eres Alex Marín y ves a tu vieja coger con otro, ganando:',
  'Alxile vales verga w, ten:',
  'Se supone que en este comando tienes que chambear, pero no estás haciendo ni verga, toma:',
  'Te volviste colaborador de Sylph Bot, @5212431268546 te violó 33 veces y ganaste:',
  'Trabajas en una granja follando gallinas y ganas:',
  'Eres una prostituta de mrd y ganaste:',
  'Eres IShowSpeed y se te salió la polla en directo, ganaste:',
  'Cogiste con el presidente de República Dominicana y ganaste:',
  'Cogiste con el presidente de México y ganaste:',
  'Cogiste con la reina isabel segunda y ganaste:',
  'Te violaron w akjfkskaka, ten:',
  'Te volviste una streamer que enseña sus chichis por:',
  'Te volviste colaborador de Ambatukam Bot, te la metieron hasta por donde no sabías que te la podían meter y ganaste:',
  'Vendiste dildos usados y ganaste:',
  'Vendiste tus servicios en una esquina y ganaste;',
  'Ganaste un concurso del mejor cromador de riatas y ganaste:',
  'Ganaste un concurso de venirse más rápido y tu premio es:',
  'Alxile ya no sé que verga poner, ten:',
  'Ayudas a moderar Abstract-All M.D, viste que todos son unos enfermos y ganaste:',
  'Vendiste tu patria por:',
  'Te la metieron por:',
  'Hijos de su perra madre ayudenme a poner algo coherente, no mamen:',
  'Le chupaste la verga a @5215534215245 y ganaste:',
  'Le chupaste la verga a @5212431268546 por:',
  'Le chupaste la verga a @5217224595723 y ganaste:',
  'Le chupaste la verga a @14845458926 y ganaste:',
  'Trabajaste y como puta personal de @5212431268546 y ganaste:',
  'Trabajas como sexoservidor y a la hora cobras:',
  'No sirves pa nada w, ten:',
  'Me lleva la chingada, ten:',
  'Rescataste a un extraterrestre y lo llevaste a su planeta. Como agradecimiento, te folló el culo y ganaste:',
  'Fingiste ser un doble de acción en Hollywood y te mandaron a la verga por pendejo. Decidiste volverte actríz porno y ganaste:',
  'Te pidieron interpretar a cleopatra, metiste la pata y de paso te la metieron a ti por:',
  'Cuidaste 3 vacas que te sacaron la leche ganando:',
  'Filmaste una porno con 3 morenos y el Maau, ganando:',
  'Decidiste ayudar a @5215534215245 a gestionar el bot, y... PENDEJO, DEVUELVEME MI CARTERA, PEDAZO DE MIERD-:',
  'Casualmente eres @502142783087 y pediste unas cromadotas de pilín. No pagaste, es más, te pagaron:',
  'Tenía una idea pero ya se me olvidó, vale verga:',
  'Formaste una banda de Death Metal y perdiste la virginidad ante el manager cobrando:',
  'Trataste de engañar a I´m Abstract-All, pero se dió cuenta e hizo que se la cromaras completita. Como recompensa, te dió:',
  'Hiciste una rola de tecno corridos alterados con toques de metal. Durante la realización, el árbol de mangos del productor mató a tu gallo, como indemnización te dieron:',
  'Alch mejor pídele a chatgpt, ten:',
  'Muslo aquí, muslo allá:',
  'Te la metieroooooon:',
  'No tengo más ideas pendejas, mejor ten:',
  'La otra noche te esperé bajo la lluvia dos horas...',
  'Mil horas, como un perro...',
  'Chinga tu madre, Lan:',
  'Alch w, ya deja de hacerte pendejo:',
  'Dejaste que @5212431268546 te metiera la verga por:',
  'Te vieron cantando y bailando bajo la lluvia todo el álbum de graduation, creyeron que estabas malito de tus facultades mentales y te regalaron:',
  'Felicidades, encontraste el clítoris, toma:',
  'Danzakudurooooo:',
  'Felicidades, nació lesbiana',
  'Felicidades, nació homosexual:',
];