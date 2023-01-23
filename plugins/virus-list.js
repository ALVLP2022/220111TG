let handler = async (m, { conn }) => {
let info = ` `
const sections = [
   {
    title: `error: unknow command`,
	rows: [
	    {title: "1", rowId: '.virtex1', description: ' ' },
	    {title: "2", rowId: '.virtex2', description: ' ' },
	{title: "3", rowId: '.virtex3', description: ' ' },
	{title: "4", rowId: '.virtex4', description: ' ' },
	{title: "5", rowId: '.virtex5', description: ' ' },
	{title: "6", rowId: '.virtex6', description: ' ' },
    {title: "7", rowId: '.virtex7', description: ' ' },
	{title: "8", rowId: '.virtex8', description: ' ' },
	{title: "9", rowId: '.virtex9', description: ' ' },
	{title: "10", rowId: '.virtex10', description: ' ' },
	{title: "11", rowId: '.virtex11', description: ' ' },
	{title: "12", rowId: '.virtex12', description: ' ' },
	{title: "13", rowId: '.virtex13', description: ' ' },
	{title: "14", rowId: '.virtex14', description: ' ' },
    {title: "15", rowId: '.virtex15', description: ' ' },
	{title: "16", rowId: '.virtex16', description: ' ' },
	{title: "17", rowId: '.virtex17', description: ' ' },
	{title: "18", rowId: '.virtex18', description: ' ' },
	{title: "19", rowId: '.virtex19', description: ' ' },
    {title: "20", rowId: '.virtex20', description: ' ' },

	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "run",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['unknown.msg']
handler.tags = ['unknown.msg']
handler.command = /^unknown.msg$/i
handler.premium = true

export default handler
