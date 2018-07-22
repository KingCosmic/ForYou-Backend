const express = require('express');
const mongoose = require('mongoose');
const http = require('http');

const config = require('./config');

mongoose.connect(config.mongoUrl);

const server = express();

server.use('/', require('./routes'));

server.listen(config.port, () => {
  console.log(`Listening on port: ${config.port}`);
})

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);