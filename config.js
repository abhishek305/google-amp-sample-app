/**
 *
 * Below provide your stack credentials for performing sdk/api calls using Contentstack SDK
 */

module.exports = {
  port: 4000,
  apiKey: 'bltff856f3f034d89c7', // your apiKey
  accessToken: 'cs037658fd3f355e61abdec712', // delivery token
  env: 'development', // publishing environment
  contentTypeUid: {
    headerContentTypeUid: 'header_amp', // provide content-type uid for header
    footerContentTypeUid: 'footer_amp', // provide content-type uid for footer
    homeContentTypeUid: 'home_amp', // provide content-type uid for home page
    blogContentTypeUid: 'blogs_amp', // provide content-type uid for blogs
  },
};
