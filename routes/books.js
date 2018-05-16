const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// GET /books
router.get('/', (req, res) => {
  Book.find({})
    .exec((err, books) => {
      if (err) res.send('Error has occurred');
      else res.status(200).json(books);
    });
});

// GET /books/id
router.get('/:id', (req, res) => {
  Book.findOne({
    _id: req.params.id
  }).
  exec((err, book) => {
    if (err) res.send('Error has occurred');
    else res.status(200).json(book);
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
