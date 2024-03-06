import { MongoClient, ServerApiVersion } from "mongodb";
// Replace the uri string with your MongoDB deployment's connection string.
const uri = process.env.MONGO_URI as string;
const DB_NAME = process.env.DB_NAME as string;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const db = client.db(DB_NAME);
