import { MongoClient, Db } from 'mongodb';

class MongoSingleton {
  private static instance: MongoSingleton;
  private client: MongoClient;
  private db?: Db;

  private constructor() {
    this.client = new MongoClient(process.env.MONGO_URI || '');
  }

  public static getInstance(): MongoSingleton {
    if (!MongoSingleton.instance) {
      MongoSingleton.instance = new MongoSingleton();
    }
    return MongoSingleton.instance;
  }

  public async connect(): Promise<Db> {
    if (!this.db) {
      await this.client.connect();
      this.db = this.client.db(process.env.MONGO_DB || 'test');
      console.log('✅ MongoDB connected');
    }
    return this.db;
  }

  public getDb(): Db {
    if (!this.db) {
      throw new Error('MongoDB not connected yet!');
    }
    return this.db;
  }
}

export default MongoSingleton;
