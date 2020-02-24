// Define a schema to represent a registered voter

// required database
const mongoose = require('mongoose');

// Schema for a collection of voters
const Voter = new mongoose.Schema({
  first: String,
  last: String,
  zip: Number,
  history: String
});

// Speed up queries and export schema
Voter.index({first: 1});
Voter.index({last: 1});
Voter.index({zip: 1});
Voter.index({history: 1});
module.exports = mongoose.model('Voter', Voter);
