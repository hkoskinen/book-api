const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  author: String,
  pubYear: Number
});

module.exports = mongoose.model('Book', BookSchema);
