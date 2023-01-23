let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 50) throw '*Error: to many argument*️'
await m.reply(`*Sending to: ${nomor}*\nCount:*${fixedJumlah}*\nStatus: Complete`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['tools']
handler.command = /^spam$/i
handler.group = false
handler.premium = true
handler.private = true
handler.limit = false
export default handler
