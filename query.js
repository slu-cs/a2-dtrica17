// Query the voter database

const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');

connect(); // To the database

const queries = [

  // How many registered voters live in the Canton zip code (13617)?
  Voter.find().where('zip').equals(13617),

  // What are the full names of all the registered voters whose first-name is STARR?
  Voter.find().where('first').equals('STARR'),

  // How many people voted in the 2016 general election (GE16)?
  Voter.find().where('history').in('GE16'),

  // What is the last-name that comes last in the county in alphabetical order?
  Voter.find().sort('-last').limit(1),

  // How many zip codes does the county contain?
  Voter.distinct('zip')
];

// Run the queries in parallel
Promsie.all(queries)
  .then(function(results) {
    console.log('Total Registered voters in the 13617: ', results[0].map(p => p.name)); // need to address arrow function
    console.log('All voters with last name of STARR: ', results[1].map(p => p.first));
    console.log('2016 general election voter total: ', results[2].map(p => p.name)); // need to address arrow function
    console.log('The last last name: ', results[3].map(p => p.last));
    console.log('Distinct zip codes: ', results[4]);
    mongoose.connection.close();
  }).catch(error => console.error(error.stack));
