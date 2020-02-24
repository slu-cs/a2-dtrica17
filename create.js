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


// holder array for voters
const list = [];

// Parse and prepare csv file
file.on('line', function(line) {
  const rows = line.split(',');
      const voter = new Voter({
      first: rows[0],
      last: rows[1],
      zip: rows[2],
      history: rows[3]
    });
    // console.log(list);
    // console.log(list.length);
    list.push(voter.save());
  }
});


// Ready database
mongoose.connection.dropDatabase()
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));




/*
mongoose.connection.dropDatabase();

file.on('close', function()) {
  console.log('Database is ready.')
  mongoose.connection.close();
  process.exit(0)
}


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
