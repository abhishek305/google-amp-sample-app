/**
 *
 * Below provide your stack credentials for performing sdk/api calls using Contentstack SDK
 */

module.exports = {
  port: 4000,
  apiKey: 'bltd6eede0fe04bdae1', // your apiKey
  accessToken: 'cs7802575928b4fd4a266f8a68', // delivery token
  env: 'production', // publishing environment
  contentTypeUid: {
    headerContentTypeUid: 'header', // provide content-type uid for header
    footerContentTypeUid: 'footer', // provide content-type uid for footer
    homeContentTypeUid: 'home', // provide content-type uid for home page
    blogContentTypeUid: 'blogs', // provide content-type uid for blogs
  },
};
