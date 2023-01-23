let handler = async (m, { conn }) => {
let info = ``
const sections = [
   {
    title: `Plugin`,
	rows: [    
	{title: "OpenAI", rowId: '.ai Artificial Intelligence', description: ' ' },	
	
	{title: "Tools", rowId: '.tool', description: ' ' },
	{title: "Miscellaneous", rowId: '.msc', description: ' ' },
	{title: "Setting", rowId: '.console', description: ' ' }

	]
    },
]

const listMessage = {
  text: 'Hello There, How Ican Help You 🦧',
  footer: info,
  title: null,
  buttonText: "Show",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['system.call.menu']
handler.tags = ['unknown.msg']
handler.command = /^help$/i
handler.register = true
export default handler
