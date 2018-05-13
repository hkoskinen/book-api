const express = require('express');
const app = express();
const Book = require('./db/schemas/book.model');

// simple mongoose connection
const HOSTNAME = 'localhost';
const PORT = 27017; // default MongoDB port
const DATABASE_NAME = 'muhdb';

const mongoose = require('mongoose');
mongoose.connect(`mongodb://${HOSTNAME}:${PORT}/${DATABASE_NAME}`).then(
  () => { console.log('Connected to MongoDB successfylly'); },
  err => { console.log('error: ' + err);}
);

app.use(express.static('public'));

// The req and res are the exact same objects that Node provides.
app.get('/', (req, res) => {
  res.send('Hello to Book API');
});

// /books routes should go to their own file. Keep here for now.
app.get('/books', (req, res) => {
  Book.find({})
    .exec((err, books) => {
      if (err) res.send('Error has occurred');
      else res.json(books);
    });
});

app.get('/books/:id', (req, res) => {
  Book.findOne({
    _id: req.params.id
  }).
  exec((err, book) => {
    if (err) res.send('Error has occurred');
    else res.json(book);
  });
});

app.post('/books', (req, res) => {
  res.send('POST /books');
});

app.put('/books/:id', (req, res) => {
  res.send('PUT /books/id');
});

app.delete('/books/:id', (req, res) => {
  res.send('DELETE /books/id');
});

app.use((req, res, next) => {
  res.status(404).send('Sorry can\'t find that!');
});

const PORT_NUMBER = 3000;
app.listen(PORT_NUMBER, () => console.log(`Listening on port ${PORT_NUMBER}`));
