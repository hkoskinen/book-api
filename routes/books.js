const express = require('express');
const router = express.Router();
const Book = require('../db/schemas/book.model');

// simple mongoose connection
const HOSTNAME = 'localhost';
const PORT = 27017; // default MongoDB port
const DATABASE_NAME = 'muhdb';

const mongoose = require('mongoose');
mongoose.connect(`mongodb://${HOSTNAME}:${PORT}/${DATABASE_NAME}`).then(
  () => { console.log('Connected to MongoDB successfylly'); },
  err => { console.log('error: ' + err);}
);

// GET /books
router.get('/', (req, res) => {
  Book.find({})
    .exec((err, books) => {
      if (err) res.send('Error has occurred');
      else res.json(books);
    });
});

// GET /books/id
router.get('/:id', (req, res) => {
  Book.findOne({
    _id: req.params.id
  }).
  exec((err, book) => {
    if (err) res.send('Error has occurred');
    else res.json(book);
  });
});

// POST /books
router.post('/', (req, res) => {
  res.send('POST /books');
});

// PUT /books/id
router.put('/:id', (req, res) => {
  res.send('PUT /books/id');
});

// DELETE /books/id
router.delete('/:id', (req, res) => {
  res.send('DELETE /books/id');
});

module.exports = router;
