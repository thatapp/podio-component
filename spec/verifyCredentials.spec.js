describe('verifyCredentials', () => {
  const vc = require('../verifyCredentials');
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
