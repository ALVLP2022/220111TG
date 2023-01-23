/*
   Silahkan Di Pakek
   Tapi Bantu Rapihin :v
   Buatan: Miaweers
*/
import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, args }) => {
    let bot = conn.user.jid // Bot
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw `Error: image not found`
        conn.updateProfilePicture(bot, img)
        conn.reply(m.chat, 'Compleate', m)
    }
}
handler.help = ['change.profil']
handler.command = /^(change.profil)$/i
handler.owner = true

export default handler
