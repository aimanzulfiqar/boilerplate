import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import dotenv from 'dotenv';

dotenv.config();

console.log('TypeORM initializing MongoDB connection with:', {
  uri: process.env.MONGO_URI,
  database: process.env.MONGO_DB || 'LEARNING'
});

export const AppDataSource = new DataSource({
  type: 'mongodb',
  url: process.env.MONGO_URI,
  database: process.env.MONGO_DB || 'LEARNING',
  synchronize: true,
  logging: true, 
  entities: [__dirname + '/../entities/*.ts'],
} as MongoConnectionOptions);
