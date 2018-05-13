const express = require('express');
const app = express();
const books = require('./routes/books');

app.use(express.static('public'));
app.use('/books', books);

app.get('/', (req, res) => {
  res.send('Hello to Book API');
});

const PORT_NUMBER = 3000;
app.listen(PORT_NUMBER, () => console.log(`Listening on port ${PORT_NUMBER}`));
