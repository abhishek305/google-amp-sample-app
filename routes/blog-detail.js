/**
 * Module dependencies.
 */

const express = require('express');

const router = express.Router();
const Contentstack = require('contentstack');
const configVars = require('../config');

// Initialize stack

const Stack = Contentstack.Stack(configVars.apiKey, configVars.accessToken, configVars.env);

// Below router method will fetch & render a specific blog

router.get('/', (req, res) => {
  Stack.ContentType(configVars.contentTypeUid.blogContentTypeUid).Query()

    .toJSON()
    .find()
    .then((result) => {
      const blogContent = result[0].find((blog) => `/blogs${blog.url}` === `${req.originalUrl}`);
      if (blogContent) {
        res.render('pages/blogpage.html', { blogDetail: blogContent });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;