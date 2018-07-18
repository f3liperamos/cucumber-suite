module.exports = function MailReader({ unreadMails }) {
  this.unreadMails = unreadMails

  return {
    unreadMails,
    read(number = 1) {
      const mailsLeft = this.unreadMails - number
      if (mailsLeft <= 0) return this.unreadMails = 0
      this.unreadMails = mailsLeft
    }
  }
}
