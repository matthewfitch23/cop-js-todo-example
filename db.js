const { MongoClient } = require('mongodb');
const { connectionString } = require('./config');

const client = new MongoClient(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
);

client.connect();

process.on('exit', () => {
  client.close();
});

module.exports = client;
