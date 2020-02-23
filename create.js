// Reads voters.csv and creates the collection

const mongoose = require('mongoose');
const connect = require('./db');
const Professor = require('./schema');

connect(); // To the database


// Read majors.csv (which needs to be on your VM when you run this code).
const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input: fs.createReadStream('majors.csv')
});

const rows = csv.split('\n');
const data = rows.map(d => d.split(',');

//const output = data.map(row => {

//});

console.log(data);

/*

// Ready database
mongoose.connection.dropDatabase()
  .then(() => harcourt.save())
  .then(() => torrey.save())
  .then(() => lee.save())
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));


  // Create all of the voters
  const harcourt = new Professor({
    name: 'Ed Harcourt',
    rank: 'Full',
    started: 2003,
    courses: [140, 220, 345, 362, 364]
  });

*/

// Mongoose site: https://mongoosejs.com/docs/api/connection.html#connection_Connection-dropDatabase
// https://stackoverflow.com/questions/48015270/steps-to-create-javascript-objects-from-text-data-out-of-a-csv-file-using-no-lib
