import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
function getRandom() {
    if (Array.isArray(this) || this instanceof String) return this[Math.floor(Math.random() * this.length)]
    return Math.floor(Math.random() * 9000 + 1000)

}

	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "ID / SN Gemerator",
	rows: [
	    {title: "Generate", rowId: '.reg' + namae + '.' + getRandom([(this)])}
	]
    },
]

const listMessage = {
  text: `│›Generate Login ID...`,
  title: "▢- - - - - REGISTER - - - - -",
  buttonText: "Click Here !",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `│▸ *sᴛᴀᴛᴜs:* Registered to Databae`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let [_, name, splitter, age] = text.match(Reg)
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `
┏─• *ᴜsᴇʀs*
│▸ *sᴛᴀᴛᴜs:* SUKSES TERDAFTAR ☑️
│▸ *ɴᴀᴍᴇ:* ${name}
│▸ *ᴀɢᴇ:* ${age} ʏᴇᴀʀs
│▸ *sɴ:* ${sn}
┗────···
`
  let buttonMessage= {
'document':{'url':sgc},
'mimetype':global.ddocx,
'fileName':'- - - - - ʀᴇɢɪsᴛᴇʀ - - - - -',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':global.sig,
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch('https://telegra.ph/file/4a7e5f18efaadec18a7a0.jpg')).buffer(),
'sourceUrl':sgc}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler
