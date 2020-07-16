const MongoClient = require('mongodb').MongoClient;
const url = process.env.DB_URL || 'mongodb://localhost:27017';

// Database Name
const dbName = process.env.DATABASE_NAME || 'EntertainMe';

// Create a new MongoClient
const client = new MongoClient( url, { useNewUrlParser:true, useUnifiedTopology:true });

client.connect();

const db = client.db(dbName);

module.exports = db;