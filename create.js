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
file.on('line', function(line) {
  const rows = line.split('\n');
  //const data = rows.split(',');
  console.log(data);
  const data = rows.map(d => d.split(','));
  const voters = data.map(row => {
    const new_voter = new Voter({
      first: row[0],
      last: row[1],
      zip: row[2],
      history: row[3]
    });
  });
});




/*
mongoose.connection.dropDatabase()
  .then(() => rows.save())
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
*/

/*
const rows = csv.split('\n');
const data = rows.map(d => d.split(','));
console.log(data);

const output = data.map(row => {
   const obj = {};
   headers.forEach((h, i) => obj[h] = row[i] });
   return obj;
});
*/

// https://www.npmjs.com/package/csv-parser
// Mongoose site: https://mongoosejs.com/docs/api/connection.html#connection_Connection-dropDatabase
// https://stackoverflow.com/questions/48015270/steps-to-create-javascript-objects-from-text-data-out-of-a-csv-file-using-no-lib
