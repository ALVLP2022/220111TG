let handler = async (m, { conn, text }) => {

    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['๐ฑ', '๐ฆง', '๐', '๐','๐ฟ','๐คจ','๐'])}`,
            key: m.key,
          }})
  
  }
handler.customPrefix = /(hum?u|bile?k|ban?h|cum?|knt?l|y?|mmk|p|b(a|i)?c?(o|i)?(t|d)?|wibu|p(a)?nt(e)?k|pepe?k|owner)/i
handler.command = new RegExp
  
handler.mods = false

export default handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }