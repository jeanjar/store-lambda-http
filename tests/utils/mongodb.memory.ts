import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";


export async function connectMemoryDatabase() {
  const mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
  await mongoose.connect(uri);
}

export async function disconnectMemoryDatabase() {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoose.disconnect();
}