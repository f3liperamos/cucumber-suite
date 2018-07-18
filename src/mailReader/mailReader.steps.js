// features/support/steps.js
const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')

const MailReader = require('./mailReader')

Given('I have one unread mail', function() {
  this.mailReader = new MailReader({ unreadMails: 1 })
});

When('I read a mail', function () {
  this.mailReader.read()
});

Then('I should have no mails left', function () {
  expect(this.mailReader.unreadMails).to.equal(0)
});

Given('I have {int} unread mails', function (unread) {
  this.mailReader = new MailReader({ unreadMails: unread })
});

When('I read {int} mails', function (int) {
  this.mailReader.read(int)
});

Then('I should have {int} unread mails', function (unreadMailsLeft) {
  expect(this.mailReader.unreadMails).to.equal(unreadMailsLeft)
});
