const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('');

const server = express();

server.use('/', require('./routes'));

server.listen(4000, () => {
  console.log('Listening on port: 4000');
})