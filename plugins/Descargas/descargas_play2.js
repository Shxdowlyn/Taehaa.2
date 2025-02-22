import fetch from "node-fetch";
import yts from "yt-search"; // Asegúrate de tener instalado yt-search

//CÓDIGO OFICIAL DE MEDIAHUB TM
const encodedApiUrl = "aHR0cHM6Ly9hcGkuYWdhdHoueHl6L2FwaS95dG1wNA==";

// Marca oficial de MediaHub
const officialBrand = "©Prohibido La Copia, Código Oficial De MediaHub™";

// ENVIAR INFORMACIÓN PARA EL ARCHIVO
const verifyBrand = () => {
  const brand = "©Prohibido La Copia, Código Oficial De MediaHub™";
  if (brand !== officialBrand) {
    throw new Error(
      "❌ *ERROR CRÍTICO:* La marca oficial de MediaHub ha sido alterada. Restáurela para continuar usando el código."
    );
  }
};

// Función para realizar reintentos al obtener la URL de descarga con un tiempo de espera ajustado
const fetchWithRetries = async (url, maxRetries = 2, timeout = 60000) => {
  let attempt = 0;
  while (attempt <= maxRetries) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, { signal: controller.signal });
      const data = await response.json();

      clearTimeout(timeoutId); // Limpiar el timeout si la respuesta es exitosa

      if (data && data.status === 200 && data.data && data.data.downloadUrl) {
        return data.data; // Retorna el resultado si es válido
      }
    } catch (error) {
      console.error(`Error en el intento ${attempt + 1}:`, error.message);
      if (error.name === "AbortError") {
        console.error("La solicitud fue cancelada debido al tiempo de espera.");
      }
    }
    attempt++;
  }
  throw new Error("No se pudo obtener una respuesta válida después de varios intentos.");
};

// Función principal para manejar comandos
let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    verifyBrand();

    if (!text) {
      const example =
        command === "ytmp4"
          ? `${usedPrefix}${command} https://youtu.be/URL_DEL_VIDEO`
          : `${usedPrefix}${command} Never Gonna Give You Up`;

      return conn.sendMessage(m.chat, {
        text: `⚠️ *¡Atención!*\n\n💡 *Por favor ingresa ${
          command === "play2" ? "un término de búsqueda" : "una URL válida de YouTube"
        }.*\n\n📌 *Ejemplo:* ${example}`,
      });
    }

    // Comando para descargar directamente de URL (ytmp4 o ytv)
    if (command === "ytmp4" || command === "ytv") {
      if (!/^https?:\/\/(www\.)?youtube\.com\/watch\?v=|youtu\.be\//.test(text)) {
        return conn.sendMessage(m.chat, {
          text: `❌ *La URL ingresada no es válida.*\n\n📌 *Ejemplo válido:* ${usedPrefix}${command} https://youtu.be/URL_DEL_VIDEO`,
        });
      }

      const apiUrl = `${Buffer.from(encodedApiUrl, "base64").toString("utf-8")}?url=${encodeURIComponent(text)}`;
      const apiData = await fetchWithRetries(apiUrl, 2, 60000);

      const { title: apiTitle, downloadUrl, image: apiImage } = apiData;

      // Obtener el tamaño del archivo
      const fileResponse = await fetch(downloadUrl, { method: "HEAD" });
      const fileSize = parseInt(fileResponse.headers.get("content-length") || 0);
      const fileSizeInMB = fileSize / (1024 * 1024); // Convertir bytes a MB

      await conn.sendMessage(m.chat, { image: { url: apiImage }, caption: `🎥 *Video Encontrado:* ${apiTitle}` });

      if (fileSizeInMB > 70) {
        await conn.sendMessage(
          m.chat,
          {
            document: { url: downloadUrl },
            mimetype: "video/mp4",
            fileName: apiTitle || "video.mp4",
            caption: `📂 *Descarga en formato documento:*\n🎵 *Título:* ${apiTitle}\n📦 *Tamaño:* ${fileSizeInMB.toFixed(
              2
            )} MB`,
          },
          { quoted: m }
        );
      } else {
        await conn.sendMessage(
          m.chat,
          {
            video: { url: downloadUrl },
            mimetype: "video/mp4",
            fileName: apiTitle || "video.mp4",
            caption: `🎥 *Video Descargado:*\n🎵 *Título:* ${apiTitle}\n📦 *Tamaño:* ${fileSizeInMB.toFixed(2)} MB`,
          },
          { quoted: m }
        );
      }
      return;
    }

    // Código original para búsqueda y descarga usando yt-search (play2)
    const searchResults = await yts(text);
    const video = searchResults.videos[0]; // Tomamos el primer resultado

    if (!video) {
      return conn.sendMessage(m.chat, {
        text: `❌ *No se encontraron resultados para:* ${text}`,
      });
    }

    const { title, url: videoUrl, timestamp, views, author, image, ago } = video;

    const apiUrl = `${Buffer.from(encodedApiUrl, "base64").toString("utf-8")}?url=${encodeURIComponent(videoUrl)}`;
    const apiData = await fetchWithRetries(apiUrl, 2, 60000);

    const { title: apiTitle, downloadUrl, image: apiImage } = apiData;

    const fileResponse = await fetch(downloadUrl, { method: "HEAD" });
    const fileSize = parseInt(fileResponse.headers.get("content-length") || 0);
    const fileSizeInMB = fileSize / (1024 * 1024);

    const videoInfo = `
⌘━─━─[August-Ai]─━─━⌘

➷ *Título⤿:* ${apiTitle}
➷ *Subido⤿:* ${ago}
➷ *Duración⤿:* ${timestamp}
➷ *Vistas⤿:* ${(views / 1000).toFixed(1)}k (${views.toLocaleString()})
➷ *URL⤿:* ${videoUrl}

➤ *Su Resultado Se Está Enviando Por Favor Espere....* 

> _${officialBrand}_
    `;

    await conn.sendMessage(m.chat, { image: { url: apiImage }, caption: videoInfo });

    if (fileSizeInMB > 70) {
      await conn.sendMessage(
        m.chat,
        {
          document: { url: downloadUrl },
          mimetype: "video/mp4",
          fileName: apiTitle || `${title}.mp4`,
          caption: `📂 *Video en Formato Documento:* \n🎵 *Título:* ${apiTitle}\n📦 *Tamaño:* ${fileSizeInMB.toFixed(2)} MB`,
        },
        { quoted: m }
      );
    } else {
      await conn.sendMessage(
        m.chat,
        {
          video: { url: downloadUrl },
          mimetype: "video/mp4",
          fileName: apiTitle || `${title}.mp4`,
          caption: `🎥 *Video Descargado:* \n🎵 *Título:* ${apiTitle}\n📦 *Tamaño:* ${fileSizeInMB.toFixed(2)} MB`,
        },
        { quoted: m }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    conn.sendMessage(m.chat, {
      text: `❌ *Error crítico detectado:*\n${error.message || "Error desconocido."}`,
    });
  }
};

handler.command = /^(play2|ytmp4|ytv)$/i;

export default handler;
