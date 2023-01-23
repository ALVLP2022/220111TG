import fetch from 'node-fetch'

let handler = async function (m, { conn, text }) {
function getRandom() {
    if (Array.isArray(this) || this instanceof String) return this[Math.floor(Math.random() * this.length)]
    //Random Number: 4 Digits
    return Math.floor(Math.random() * 9000 + 1000)
  
//this: return 
 conn.reply(m.chat, this , m)
}
}

//command
handler.command = /^(test189|random.number.test|)$/i

export default handler 
