// MADE BY KORONEOFC (JANGAN DIHAPUS !!!)


import jimp from "jimp"
import uploadImage from "../lib/uploadImage.js"
import uploadFile from "../lib/uploadFile.js"

let handler = async (m, { conn, usedPrefix }) => {
	
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw "where the media?"

let media = await q.download()
let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isMedia ? uploadImage : uploadImage)(media)

let source = await jimp.read(await link)
let height = await source.getHeight()
let width = await source.getWidth()

m.reply(`_*${hsquere[0]}  RESOLUTION :*_ ${width} x ${height}

> ᴡɪᴅᴛʜ : ${width}
> ʜᴇɪɢʜᴛ : ${height}

> ʟɪɴᴋ : ${link}`)
}
handler.help = ['resolution <reply | caption>', 'reso <reply | caption>']
handler.tags = ['tool']
handler.command = /^(reso(lution)?)$/i

export default handler