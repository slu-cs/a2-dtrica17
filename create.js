// Reads voters.csv and creates the collection

const mongoose = require('mongoose');
const connect = require('./db');
const Professor = require('./schema');

connect(); // To the database


// Read majors.csv (which needs to be on your VM when you run this code).
const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input: fs.createReadStream('voters.csv')
});


// Create an array of objects, so that each line of the file is represented by an object with four properties.
const rows = [];
file.on('line', function(line) {
  const columns = line.split(',');
  rows.push({
    first: columns[0],
    last: columns[1],
    zip: Number(columns[2]),
    history: columns[3]
  });
});


mongoose.connection.dropDatabase()
  .then(() => rows.save())
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));


/*
const rows = csv.split('\n');
const data = rows.map(d => d.split(','));
console.log(data);
*/

// Mongoose site: https://mongoosejs.com/docs/api/connection.html#connection_Connection-dropDatabase
// https://stackoverflow.com/questions/48015270/steps-to-create-javascript-objects-from-text-data-out-of-a-csv-file-using-no-lib
