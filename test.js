const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');
connect();
const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input:fs.createReadStream('voters.csv')
});
const arr = [];
//this was done using 1
//const rows = Voter.split('\n');
//const data = rows.map(b => b.split(','));

file.on('line', function(line){
    var columns = line.split(',');
    var voterguy = new Voter({
    'firstname': columns[0],
    'lastname': columns[1],
    'zipcode': columns[2],
    'history': columns[3]
  })
  arr.push(voterguy);
})



// Reset the data
mongoose.connection.dropDatabase()
  .then(() => arr.save())
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
