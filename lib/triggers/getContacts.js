/* eslint no-invalid-this: 0 no-console: 0 */
'use strict';

const Podio = require('podio-js').api;

function process(msg, cfg) {
  console.log('Fetching contacts from Podio');
  const podio = new Podio({
    authType: 'server',
    clientId: process.env.PODIO_APP_ID,
    clientSecret: process.env.PODIO_APP_SECRET
  });
  podio.setAccessToken(cfg.oauth);
  return podio.request('GET', '/contacts');
}

module.exports.process = process;
// function processTrigger(msg, cfg) {
// console.log(msg, cfg);
// var that = this;
// var podio = new Podio(cfg);
//
// podio.get('/contact/')
//       .then(handleContacts)
//       .fail(messages.emitError.bind(this))
//       .done(messages.emitEnd.bind(this));
//
// function handleContacts(contacts) {
//   contacts.forEach(function (contact) {
//     contact = format(contact);
//     var hash = crypt.getHash(_.omit(contact, 'last_seen_on'));
//     if (snapshot[contact.user_id] !== hash) {
//       snapshot[contact.user_id] = hash;
//       messages.emitData.call(that, contact);
//     }
//   });
//   messages.emitSnapshot.call(that, snapshot);
// }
//
// function format(contact) {
//   var fields = ['rights', 'url', 'phone', 'mail', 'title'];
//
//   fields.forEach(makeObject);
//
//   function makeObject(field) {
//     if (contact[field]) {
//       contact[field] = contact[field].map(asObject);
//     }
//   }
//   return contact;
// }
// function asObject(v) {
//   return {value: v};
// }
// }
