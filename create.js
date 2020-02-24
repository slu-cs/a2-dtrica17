// Reads voters.csv and creates the collection

// required databases and files
const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');

// connect to database
connect();


// Read voters.csv
const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input: fs.createReadStream('voters.csv')
});


// array for all voter objects
const list = [];

// Parse and prepare csv file
file.on('line', function(line) {
  const data = line.split(',');
  const voter = new Voter({
      first: data[0],
      last: data[1],
      zip: data[2],
      history: data[3]
  });
    // console.log(voter);
    // console.log(list.length);
    list.push(voter.save());
    console.log(list.length); // 65421
});


// start promises
file.on('close', function() {
  Promise.all(list)
    .then(() => console.log('All saved'))
    .catch(error => console.log(error.stack));
});



// https://www.npmjs.com/package/csv-parser
// Mongoose site: https://mongoosejs.com/docs/api/connection.html#connection_Connection-dropDatabase
// https://stackoverflow.com/questions/48015270/steps-to-create-javascript-objects-from-text-data-out-of-a-csv-file-using-no-lib
