import mongoose from 'mongoose';
import Logger from '../utils/logger';
import {
  DB_URL,
  NODE_ENV,
  DB_NAME,
} from '../constants';

const NAME_SUFFIX = (NODE_ENV === 'test') ? '_test' : '';

class Database {
  private static connection : typeof mongoose | null = null;

  static async connect() {
    try {
      const state = mongoose.STATES[mongoose.connection.readyState];
      if (state === 'disconnected') {
        const URL = `${DB_URL}/${DB_NAME}${NAME_SUFFIX}`;
        Database.connection = await mongoose.connect(URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log(`✅  Connected to DB: "${URL}"`);
      }
    } catch (e) {
      Logger.error((e as Error).message);
    }
  }

  static async disconnect() {
    try {
      await mongoose.disconnect();
    } catch (e) {
      Logger.error((e as Error).message);
    }
  }

  static generateObjectId() {
    return mongoose.Types.ObjectId();
  }

  static isValidObjectId(objectId:string) {
    return mongoose.isValidObjectId(objectId);
  }
}

export default Database;
