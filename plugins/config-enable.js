const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
  const optionsFull = `*[ 💠 ] LISTA DE OPCIONES DISPONIBLES:*

*♽.- Opción:* _Welcome._
*🝱.- Comando:* _${usedPrefix + command} welcome_
*⛨.- Desc.:* _Activa o desactiva la opción de bienvenida y despedida en chats grupales._
*♕.- Extra:* _Únicamente para los administradores en chats grupales._

⊰᯽⊱┈─────╌❊ㅤ⇑ㅤ❊╌─────┈⊰᯽⊱

*♽.- Opción:* _Modo Público._
*🝱.- Comando:* _${usedPrefix + command} public_
*⛨.- Desc.:* _El Bot se vuelve de uso público y/o privado._
*♕.- Extra:* _Únicamente para el creador y colaboredores del bot._

⊰᯽⊱┈─────╌❊ㅤ⇑ㅤ❊╌─────┈⊰᯽⊱

*♽.- Opción:* _Modo Horny *(+18)*._
*🝱.- Comando:* _${usedPrefix + command} modohorny_
*⛨.- Desc.:* _Activa o desactiva los comandos para adultos en chats grupales *(No aplica en chat privado).*_
*♕.- Extra:* _Únicamente para los administradores en chats grupales._

⊰᯽⊱┈─────╌❊ㅤ⇑ㅤ❊╌─────┈⊰᯽⊱

*♽.- Opción:* _Anti-Link(s)._
*🝱.- Comando:* _${usedPrefix + command} antilink_
*⛨.- Desc.:* _Activa o desactiva el modo anti-enlaces de WhatsApp en chats grupales._
*♕.- Extra:* _Únicamente para los administradores en chats grupales. Necesitas la opción *"restrict"* activa._

⊰᯽⊱┈─────╌❊ㅤ⇑ㅤ❊╌─────┈⊰᯽⊱

*♽.- Opción:* _Anti-Link(s) 2._
*🝱.- Comando:* _${usedPrefix + command} antilink2_
*⛨.- Desc.:* _Activa o desactiva el modo anti-enlaces en chats grupales *(inicio en "https://")*._
*♕.- Extra:* _Únicamente para los administradores en chats grupales. Necesitas la opción *"restrict"* activa._

⊰᯽⊱┈─────╌❊ㅤ⇑ㅤ❊╌─────┈⊰᯽⊱

*♽.- Opción:* _Detect._
*🝱.- Comando:* _${usedPrefix + command} detect_
*⛨.- Desc.:* _Activa o desactiva las notificaciones de cambios en chats grupales._
*♕.- Extra:* _Únicamente para los administradores en chats grupales._

⊰᯽⊱┈─────╌❊ㅤ⇑ㅤ❊╌─────┈⊰᯽⊱

*♽.- Opción:* _Detect 2._
*🝱.- Comando:* _${usedPrefix + command} detect2_
*⛨.- Desc.:* _Detecta modificaciones en chats grupales y mantiene una mejor gestión._
*♕.- Extra:* _Únicamente para los administradores en chats grupales._

⊰᯽⊱┈─────╌❊ㅤ⇑ㅤ❊╌─────┈⊰᯽⊱

*♽.- Opción:* _Restrict._
*🝱.- Comando:* _${usedPrefix + command} restrict_
*⛨.- Desc.:* _Activa o desactiva *todas* las restricciones en el bot._
*♕.- Extra:* _Únicamente para el creador y colaboredores del bot._

⊰᯽⊱┈─────╌❊ㅤ⇑ㅤ❊╌─────┈⊰᯽⊱

*♽.- Opción:* _Auto Read._
*🝱.- Comando:* _${usedPrefix + command} autoread_
*⛨.- Desc.:* _Todos los mensajes enviados al chat privado del bot serán marcados como "leído" automáticamente._
*♕.- Extra:* _Únicamente para el creador y colaboredores del bot._

⊰᯽⊱┈─────╌❊ㅤ⇑ㅤ❊╌─────┈⊰᯽⊱

*♽.- Opción:* _Auto Stickers._
*🝱.- Comando:* _${usedPrefix + command} autosticker_
*⛨.- Desc.:* _Todas las imagenes/videos serán convertidos a stickers automáticamente._
*♕.- Extra:* _Únicamente para los administradores en chats grupales._

⊰᯽⊱┈─────╌❊ㅤ⇑ㅤ❊╌─────┈⊰᯽⊱

*♽.- Opción:* _PV Only._
*🝱.- Comando:* _${usedPrefix + command} pvonly_
*⛨.- Desc.:* _El bot únicamente funcionará en chats privados._
*♕.- Extra:* _Únicamente para el creador y colaboredores del bot._

⊰᯽⊱┈─────╌❊ㅤ⇑ㅤ❊╌─────┈⊰᯽⊱

*♽.- Opción:* _GC Only._
*🝱.- Comando:* _${usedPrefix + command} gconly_
*⛨.- Desc.:* _El bot únicamente funcionará en chats grupales._
*♕.- Extra:* _Únicamente para el creador y colaboredores del bot._

⊰᯽⊱┈─────╌❊ㅤ⇑ㅤ❊╌─────┈⊰᯽⊱

*♽.- Opción:* _AntiViewOnce._
*🝱.- Comando:* _${usedPrefix + command} antiviewonce_
*⛨.- Desc.:* _Todos los archivos multimedia configurados con una única visualización, serán enviados por el bot._
*♕.- Extra:* _Únicamente para los administradores en chats grupales._

⊰᯽⊱┈─────╌❊ㅤ⇑ㅤ❊╌─────┈⊰᯽⊱

*♽.- Opción:* _Anti Call._
*🝱.- Comando:* _${usedPrefix + command} anticall_
*⛨.- Desc.:* _El Bot bloquerá a todas las personas que lo llamen._
*♕.- Extra:* _Únicamente para el creador y colaboredores del bot._

⊰᯽⊱┈─────╌❊ㅤ⇑ㅤ❊╌─────┈⊰᯽⊱

*♽.- Opción:* _Anti Privado._
*🝱.- Comando:* _${usedPrefix + command} antiprivado_
*⛨.- Desc.:* _El Bot bloquerá a todas las personas que escriban en el chat privado._
*♕.- Extra:* _Únicamente para el creador y colaboredores del bot._

⊰᯽⊱┈─────╌❊ㅤ⇑ㅤ❊╌─────┈⊰᯽⊱

*♽.- Opción:* _Anti Toxic._
*🝱.- Comando:* _${usedPrefix + command} antitoxic_
*⛨.- Desc.:* Se detectan las malas palabras y se advierte al participante del grupo previamente a ser eliminado *(Únicamente chats grupales)*._
*♕.- Extra:* _Únicamente para los administradores en chats grupales. Necesitas la opción *"restrict"* activa._

⊰᯽⊱┈─────╌❊ㅤ⇑ㅤ❊╌─────┈⊰᯽⊱

*♽.- Opción:* _Anti Trabas._
*🝱.- Comando:* _${usedPrefix + command} antitraba_
*⛨.- Desc.:*  _El Bot detecta todos los textos largos que podrían causar lentitud y elimina al usuario *(Únicamente chats grupales)*._
*♕.- Extra:* _Únicamente para los administradores en chats grupales. Necesitas la opción *"restrict"* activa._

⊰᯽⊱┈─────╌❊ㅤ⇑ㅤ❊╌─────┈⊰᯽⊱

*♽.- Opción:* _Anti Arabes._
*🝱.- Comando:* _${usedPrefix + command} antiarabes_
*⛨.- Desc.:* _Si un número árabe entra a un chat grupal, este lo elimina automáticamente._
*♕.- Extra:* _Únicamente para los administradores en chats grupales. Necesitas la opción *"welcome"* y *"restrict"* activa._

⊰᯽⊱┈─────╌❊ㅤ⇑ㅤ❊╌─────┈⊰᯽⊱

*♽.- Opción:* _Anti Arabes 2._
*🝱.- Comando:* _${usedPrefix + command} antiarabes2_
*⛨.- Desc.:* _Si un número árabe escribe en un chat grupal, este lo elimina automáticamente._
*♕.- Extra:* _Únicamente para los administradores en chats grupales. Necesitas la opción *"restrict"* activa._

⊰᯽⊱┈─────╌❊ㅤ⇑ㅤ❊╌─────┈⊰᯽⊱

*♽.- Opción:* _Modo Jadi Bot._
*🝱.- Comando:* _${usedPrefix + command} modejadibot_
*⛨.- Desc.:* _Activa o desactiva el uso de SubBots para los usuarios._
*♕.- Extra:* _Únicamente para el creador y colaboredores del bot._

⊰᯽⊱┈─────╌❊ㅤ⇑ㅤ❊╌─────┈⊰᯽⊱

*♽.- Opción:* _Modo Admin._
*🝱.- Comando:* _${usedPrefix + command} modoadmin_
*⛨.- Desc.:* _El bot únicamente responde comandos para los administradores en chats grupales._
*♕.- Extra:* _Únicamente para los administradores en chats grupales._

⊰᯽⊱┈─────╌❊ㅤ⇑ㅤ❊╌─────┈⊰᯽⊱

*♽.- Opción:* _Modo SimSimi._
*🝱.- Comando:* _${usedPrefix + command} simsimi_
*⛨.- Desc.:* _El bot responde automáticamente utilizando la IA de simsimi._
*♕.- Extra:* _Únicamente para los administradores en chats grupales._

--------------------------------

*♽.- Opción:* _Anti Spam._
*🝱.- Comando:* _${usedPrefix + command} antispam_
*⛨.- Desc.:* _El bot detecta si un usuario usa más de un comando aceleradamente, lo banea por 5 segundos y lo advierte._
*♕.- Extra:* _Únicamente para el creador y colaboredores del bot._`.trim();

  const isEnable = /true|enable|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'detect2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'antiporno':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = !isEnable;
      break;
    case 'public':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'antilink2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case 'modohorny':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'modoadmin':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'restrict':
      isAll = true;
      if (!isOwner) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'autoread':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      global.opts['autoread'] = isEnable;
      break;
    case 'pconly':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'gconly':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;
    case 'anticall':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'antiprivado':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'antispam':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
    case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'antiarabes2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `*[ 💠 ] Opción:* ${type}\n\n*⚕️.- Estado:* ${isEnable ? '_Activo._' : '_Inactivo._'}\n*🔹.- Para:* ${isAll ? '_Este bot._' : isUser ? '' : '_Este chat._'}`}, {quoted: m});
};
handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i;
export default handler;
