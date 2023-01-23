import fetch from 'node-fetch'
import fs from 'fs';
import crypto from 'crypto'
let handler = async (m, { conn, text, usedPrefix }) => {
    const ultah = new Date('Desember 31 2023 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let sewa = `*⃟⃟☰⃟⃟ᭁ═━┈━┈༓ *Server* 
┆➨ .refresh
┆➨ .restart
┆➨ .self
┆➨ .public
┆➨ .console (start/stop)
⃟⃟⃟⃟࿑⃟⃟⃟࿐═┈༓᭄༤

⃟⃟☰⃟⃟ᭁ═━┈━┈༓ *Main* 
┆➨ .console (start/stop)
┆➨ .ai
⃟⃟⃟⃟࿑⃟⃟⃟࿐═┈༓᭄༤

⃟⃟☰⃟⃟ᭁ═━┈━┈༓ *Info* 
┆➨ .bannedlist
┆➨ .botinfo
┆➨ .database
┆➨ .speed
⃟⃟⃟⃟࿑⃟⃟⃟࿐═┈༓᭄༤*
`
        let img1 = fs.readFileSync('./thumbnail.jpg');
        let img2 = fs.readFileSync('./media/bawah.png');
  return conn.sendButton(m.chat, hiasan, sewa, await (await fetch(`https://i.ibb.co/whksz5X/Screenshot-20230122-115542-Whats-App.png`)).buffer(), [["Version : 22.1.32.02", usedPrefix + " "]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: `Ramadhan Remaining:\n${ohari} Day, ${ojam} Hours ${onet} Minutes ${detek} Seconds`,
                        body: `𝟸𝟸𝟶𝟷𝟷𝟷𝟽ᴛɢ | ʙᴜɪʟᴅ ᴏᴘᴇʀᴀᴛᴇ ᴛʀᴀɴsғᴇʀ`,                                       previewType: 0,
                        thumbnail: await (await fetch(`https://i.ibb.co/0JPR3Kj/Open-AI-20230112-085953.jpg`)).buffer(),
                        sourceUrl: 'https://'
            }
        }
    })
}
handler.help = ['console']
handler.tags = ['owner']
handler.command = ['console']
handler.owner = true
export default handler
