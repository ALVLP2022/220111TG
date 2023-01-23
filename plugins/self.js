let handler = async(m, { conn, command }) => {
  let isPublic = command === "public";
  let self = global.opts["self"]

  if(self === !isPublic) return m.reply(`No Need, its ${!isPublic ? "Self" : "Public"} Now`)

  global.opts["self"] = !isPublic

  m.reply(`Status : ${!isPublic ? "Self" : "Public"}`)
}

handler.help = ["self", "public"]
handler.tags = ["owner"]

handler.rowner = true

handler.command = /^(self|public)/i

export default handler 