'use strict';
const Podio = require('podio-js').api;
// This function will be called by the platform to verify credentials
module.exports = function (credentials) {
  console.log('Credentials passed for verification %j', credentials);
  const podio = new Podio({
    authType: 'server',
    clientId: process.env.PODIO_APP_ID,
    clientSecret: process.env.PODIO_APP_SECRET
  });
  podio.setAccessToken(credentials.oauth);
  return podio.isAuthenticated();
};
