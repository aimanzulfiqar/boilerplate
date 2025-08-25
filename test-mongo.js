const { MongoClient } = require('mongodb');

async function testConnection() {
  const uri = "mongodb+srv://aiman:admin@cluster0.naehtxz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  const client = new MongoClient(uri);
  
  try {
    console.log('Attempting to connect to MongoDB Atlas...');
    await client.connect();
    console.log('Connected successfully to MongoDB Atlas');
    await client.db("LEARNING").command({ ping: 1 });
    console.log('Database ping successful');
  } catch (err) {
    console.error('Connection error:', err);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

testConnection();