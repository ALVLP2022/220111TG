let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply(' *ShuttingDown* ')
    // } else m.reply('Ada nomor Ownerku disini...')
}
handler.help = ['console (start/stop)']
handler.tags = ['main']
handler.command = /^(console.stop)$/i

export default handler