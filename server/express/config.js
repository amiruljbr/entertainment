const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser:true, useUnifiedTopology:true });

let db;
// Use connect method to connect to the Server
function connect(callback) {
  client.connect(function(err) {
    if(err){
      console.log('err connection to mongo', err)
    } else {
      console.log("Connected successfully to server");
      db = client.db(dbName)
    }
    callback(err);
  });
}

function getDatabase() {
  return db
}


module.exports = {
  connect, getDatabase
}