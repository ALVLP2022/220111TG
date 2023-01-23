let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Starting Console* ')
}


handler.tags = ['main']
handler.command = /^(console.start)$/i

handler.admin = true

export default handler