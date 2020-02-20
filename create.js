// Reads voters.csv and creates the collection

const mongoose = require('mongoose');
const connect = require('./db');
const Professor = require('./schema');

const readline = require('readline');
const fs = require('fs');

connect(); // To the database

fs.createReadStream('voters.csv')


// Create all of the voters
const harcourt = new Professor({
  name: 'Ed Harcourt',
  rank: 'Full',
  started: 2003,
  courses: [140, 220, 345, 362, 364]
});


// Ready database
mongoose.connection.dropDatabase()
  .then(() => harcourt.save())
  .then(() => torrey.save())
  .then(() => lee.save())
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));



// Mongoose site: https://mongoosejs.com/docs/api/connection.html#connection_Connection-dropDatabase
