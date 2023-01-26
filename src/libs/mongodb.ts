import { connect, Mongoose } from 'mongoose';

let db: Mongoose;

export default function connectDatabase() {
  if (db && db.isOpen) {
    return db;
  }

  return connect('...')
    .then(connect => {
      db = connect;
    });
}