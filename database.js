const mongoose = require('mongoose');

const HOSTNAME = 'localhost';
const PORT = 27017; // default MongoDB port
const DATABASE_NAME = 'muhdb';

mongoose.connect(`mongodb://${HOSTNAME}:${PORT}/${DATABASE_NAME}`)
.then(() => {
  console.log('Connected to MongoDB successfylly');
})
.catch(err => {
  console.error('Connection to MongoDB failed');
});

module.exports = mongoose;
