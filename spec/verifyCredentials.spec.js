describe('verifyCredentials', () => {
  const vc = require('../verifyCredentials');
  beforeEach(() => {
    process.env.PODIO_APP_ID = 'foo';
    process.env.PODIO_APP_SECRET = 'naz';
  });
  it('should be ok', function () {
        /* eslint camelcase: 0 */
    return vc({
      oauth: {
        access_token: 'foo',
        refresh_token: 'bar',
        expires_in: 'baz'
      }
    });
  });
});
