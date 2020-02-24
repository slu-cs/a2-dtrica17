// Reads voters.csv and creates the collection

const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');

connect(); // To the database


// Read voters.csv
const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input: fs.createReadStream('voters.csv')
});


// Parse and prepare csv file
file.on('line', function(line) {
  const rows = line.split('\n');
  const data = rows.map(d => d.split(','));
  //console.log(data);
  console.log(data[0][0]);
  //for (const row in data){
  //  console.log(row[0][0]);
  //}
  const voters = data.map(row => {
    const new_voter = new Voter({
      first: data[0][0],
      last: data[0][1],
      zip: data[0][2],
      history: data[0][3]
    });
  });
  //console.log(voters);
});


/*
// Ready database
mongoose.connection.dropDatabase()
  .then(() => rows.save())
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));



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
