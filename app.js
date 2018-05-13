const express = require('express');
const app = express();

const PORT_NUMBER = 3000;

// The req and res are the exact same objects that Node provides.
app.get('/', (req, res) => {
  res.send('Hello to Book API');
});

// /books routes should go to their own file. Keep here for now.
app.get('/books', (req, res) => {
  res.send('GET /books');
});

app.get('/books/:id', (req, res) => {
  res.send('GET /books/id');
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

app.listen(PORT_NUMBER, () => console.log(`Listening on port ${PORT_NUMBER}`));
