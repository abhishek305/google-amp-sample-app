// routes

module.exports = (app) => {
  app.use('/', require('../middleware'));
  app.use('/', require('./home'));
  app.use('/blogs', require('./blogs'));
  app.use('/blogs/:blog', require('./blog-detail'));
};
