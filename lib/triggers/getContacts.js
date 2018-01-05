/* eslint no-invalid-this: 0 no-console: 0 */
'use strict';

const Podio = require('podio-js').api;
const messages = require('elasticio-node').messages;

function processTrigger(msg, cfg) {
  console.log('Fetching contacts');
  const podio = new Podio({
    authType: 'server',
    clientId: process.env.PODIO_APP_ID,
    clientSecret: process.env.PODIO_APP_SECRET
  });
  podio.setAccessToken(cfg.oauth);
  return podio.request('GET', '/contact/').then(result => {
    console.log(`Found ${result.length} contacts`);
    result.forEach(e => this.emit('data', messages.newMessageWithBody(e)));
  }).catch(error => {
    this.emit('error', new Error(`Error ${error.status} details=${JSON.stringify(error.body)}`));
  });
}

module.exports.process = processTrigger;
