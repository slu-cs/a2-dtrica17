// Query the voter database

// required databases and files
const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');

// connect to the database
connect();

// make list of queries
const queries = [

  // How many registered voters live in the Canton zip code (13617)?
  Voter.countDocuments().where('zip').equals(13617),

  // What are the full names of all the registered voters whose first-name is STARR?
  Voter.find().where('first').equals('STARR'),

  // How many people voted in the 2016 general election (GE16)?
  Voter.countDocuments().where('history').in('GE16'),

  // What is the last-name that comes last in the county in alphabetical order?
  Voter.find().sort('-last').limit(1),

  // How many zip codes does the county contain?
  Voter.distinct('zip')
];

// run all the queries
Promise.all(queries)
  .then(function(results) {
    console.log('13617 Total Registered voters: ', results[0]);
    console.log('All voters with first name of STARR: ', results[1].map(p => p.first + " " + p.last));
    console.log('2016 general election voter total: ', results[2]);
    console.log('The last last name: ', results[3][0].last);
    console.log('Distinct zip codes: ', results[4].length - 1); // -1 is to account for null
    mongoose.connection.close();
  }).catch(error => console.error(error.stack));
