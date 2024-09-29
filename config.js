import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import { ytmp3v2, ytmp4v2, ytsearch } from 'ruhend-scraper';
import fs from 'fs'; 
import fetch from 'node-fetch';
import axios from 'axios';
import BodyForm from 'form-data';
import moment from 'moment-timezone';
import * as cheerio from 'cheerio';
import fg from 'api-dylux';
import ytdl from 'ytdl-core';
import yts from 'yt-search';
import ytmp44 from './lib/ytmp44.js';
import ytmp33 from './lib/ytmp33.js';
import * as ñ from '@bochilteam/scraper';

global.ñ = ñ

global.owner = [
  ['12502890430', '𝙸𝚖://𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝-𝙰𝚕𝚕', true],
  ['5215534215245', 'ඞ 𝐿.𝐴𝑛 ༆', true],
  ['17146121800', '𝙷𝚎𝚊𝚟𝚢𝚍𝚒𝚛𝚝𝚢𝚜𝚘𝚞𝚕', true],
  ['5212431268546', 'Ｔｅｓｉｓ', true],
];

global.suittag = ['5215534215245'];
global.prems = ['51995386439'];

global.packname = '💠 𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝-𝙰𝚕𝚕 - 𝙱𝚘𝚝';
global.author = '𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝-𝙰𝚕𝚕 ł 𝙼𝙳 💠';
global.wm = '💠 𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝-𝙰𝚕𝚕 - 𝙱𝚘𝚝';
global.titulowm = '𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝-𝙰𝚕𝚕 ł 𝙼𝙳 💠';
global.titulowm2 = `𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝-𝙰𝚕𝚕 ł 𝙼𝙳 💠`;
global.igfg = '💠 𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝-𝙰𝚕𝚕 - 𝙱𝚘𝚝';
global.wait = '*[ 💠 ] Espere un momento...*';
global.errori = '*[ 💠 ] Ocurrió un error inesperado.*\n_Inténtalo nuevamente._'

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');

// Espacio para vivienda 🏠 XDD
global.ytmp3 = ytmp3v2;
global.ytmp4 = ytmp4v2;
global.ytsearch = ytsearch;
global.ytdl = ytdl;
global.fg = fg;
global.mods = [''] 
global.APIs = { 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = {
  'https://api.fgmods.xyz': 'm2XBbNvz'
}
global.ytmp44 = ytmp44;
global.ytmp33 = ytmp33;
global.yts = yts;
global.botName = '𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝-𝙰𝚕𝚕 - 𝙱𝚘𝚝';
global.adult = '*[ 💠 ] Los comandos +18 están desactivados. Puedes reactivarlos escribiendo el siguiente comando:*\n\n_*.enable* modohorny_';
/************************/

// Continúa abajo, esto no es importante
global.mods = [];
global.BodyForm = BodyForm;
global.cheerio = cheerio
//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `▸ ${dia} ${fecha}\n▸ 𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝-𝙰𝚕𝚕 - 𝙱𝚘𝚝`;
global.gt = '𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝-𝙰𝚕𝚕 - 𝙱𝚘𝚝';
global.mysticbot = '𝙰𝚋𝚜𝚝𝚛𝚊𝚌𝚝-𝙰𝚕𝚕 - 𝙱𝚘𝚝';
global.ig = 'https://www.instagram.com/lansg___/';
global.md = 'https://github.com/looolsa/Abstract-All-Bot';
global.mysticbot = 'https://github.com/looolsa/Abstract-All-Bot';
global.waitt = '❍💠 Perame tantito, carnal*';
global.waittt = '❍💠 Perame tantito, carnal*';
global.waitttt = '❍💠 Perame tantito, carnal*';
global.nomorown = '5219993404349';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; // Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;// America/Los_Angeles
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});