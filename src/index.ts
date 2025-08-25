import express from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from './db/data-source';
import { validateEnv } from './utils/env-validator';
import routes from './routes';
import { errorHandler, notFoundHandler } from './middleware/error.middleware';
import { setupSecurity } from './middleware/security.middleware';
import { MongoClient } from 'mongodb';

dotenv.config();
validateEnv();
console.log('MongoDB URI:', process.env.MONGO_URI);
const app = express();

setupSecurity(app);

app.use(express.json());

app.get('/', (_, res) => res.send('🚀 Backend Boilerplate Running'));
app.use('/api', routes);

app.use(notFoundHandler);
app.use(errorHandler);

const testDirectConnection = async () => {
  try {
    console.log('Testing direct MongoDB connection...');
    const client = new MongoClient(process.env.MONGO_URI || '');
    await client.connect();
    console.log('✅ Direct MongoDB connection successful');
    await client.close();
    return true;
  } catch (error) {
    console.error('❌ Direct MongoDB connection failed:', error);
    return false;
  }
};

testDirectConnection()
  .then(() => AppDataSource.initialize())
  .then(() => {
    console.log('✅ TypeORM connected');
    app.listen(4000, () => console.log('Server running on port 4000'));
  })
  .catch((err) => console.error(err));
