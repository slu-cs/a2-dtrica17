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
  const rows = line.split('\n');
  const data = rows.map(d => d.split(','));
  for (const row in data){
      const voter = new Voter({
      first: data[0][0],
      last: data[0][1],
      zip: data[0][2],
      history: data[0][3]
    });
    // console.log(voter);
    // console.log(list.length);
    list.push(voter);
    voter.save();
  }
});

console.log(list);

/*
const saves = documents.map(d => d.save());
Promise.all(saves)
  .then(() => console.log('All saved'))
  .catch(error => console.log(error.stack));
*/

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
