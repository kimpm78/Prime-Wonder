import { MongoClient } from 'mongodb';

const url =
  'mongodb+srv://kimpm:Foryou1234@primeproject.szymyqe.mongodb.net/?retryWrites=true&w=majority';
const options: any = { useNewUrlParser: true };

declare const global: {
  _mongo: Promise<MongoClient>;
};
let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // 開発中再実行を防ぐ
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}

export { connectDB };
