let counter = 0; 
import path from 'path'
import ffmpeg from 'fluent-ffmpeg'
let counter = 0; // Inicializa el contador
let handler = async (m) => {
  let q = m.quoted ? m.quoted : m;
  let media = await q.download();
  // Verifica si la carpeta "videos" existe, si no, la crea
  if (!fs.existsSync(videosFolder)) {
    fs.mkdirSync(videosFolder);
  }

  // Escribe el video en la carpeta "videos"
  const videoBuffer = media.buffer;
  counter++; // Incrementa el contador
  const videoName = `video_${counter}.mp4`; // Nombre del archivo de video
  const videoPath = path.join(videosFolder, videoName);
  fs.writeFile(videoPath, Buffer.from(videoBuffer), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Video subido con éxito a ${videosFolder}/${videoName}, iniciando proceso...`);

      // Configura las opciones de ffmpeg para mejorar la calidad
      const video = `${videosFolder}/${videoName}`;
      const output = `${videosFolder}/output_${counter}.mp4`;

      // Crea un comando de ffmpeg para procesar el video
      ffmpeg.default()
        .input(video)
        .videoCodec('libx264')
        .audioCodec('aac')
        .size('1920x1080')
        .videoBitrate('1000k')
        .audioBitrate('128k')
        .output(output)
        .on('end', () => {
          // Una vez que se haya procesado el video, envíalo
          conn.sendMessage(m.chat, { video: output, caption: 'Aquí tienes' }, m);
        })
        .run();
    }
  });
}

handler.command = ['subir']
export default handler