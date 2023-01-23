import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, isAdmin, isOwner, text }) => {
	if (m.isGroup) {
		switch (text) {
			case 'stop': {
				global.db.data.chats[m.chat].isBanned = true
				conn.reply(m.chat, 'Shutting Down', m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Compleate', sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
				break
			case 'start': {
				global.db.data.chats[m.chat].isBanned = false
				conn.reply(m.chat, 'Starting', m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Compleate', sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
		
		}
	}
}
handler.help = ['bot [on/off]']
handler.tags = ['group']
handler.command = /^(bot)$/i

handler.admin = true

export default handler