const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const shortid = require('shortid');

module.exports = mongoose.model('letters', new Schema({
  letterId: {
    type: String,
    default: shortid.generate,
    unique: true
  },
  content: String,
}))