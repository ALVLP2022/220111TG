import fs from 'fs'
let linkRegex = /chat.whatsapp.com\?/i


let handler = async (m, { conn, text }) => {
let res = await conn.groupAcceptInvite(linkRegex)
    }
  
  
handler.customPrefix = /(chat.whatsapp.com)/i

export default handler






