/**
 * Module dependencies.
 */

const app = require('express')();
const nunjucks = require('nunjucks');
const express = require('express');
const path = require('path');
const configVars = require('./config');


const PORT = process.env.PORT || 5000;

app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/robots.txt', function (req, res) {
  res.type('text/plain');
  res.sendFile(path.join(__dirname, 'robots.txt'));
});

nunjucks.configure(['views/'], {
  autoescape: false,
  express: app,
});

require('./routes')(app);

app.listen(PORT, () => {
  console.log('Running on port', PORT);
});
