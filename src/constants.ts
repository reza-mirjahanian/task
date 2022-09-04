// const isTestMode = process.env.NODE_ENV === 'test';
const NODE_ENV = process.env.NODE_ENV || 'development';
const SERVER_URL = process.env.SERVER_URL || 'http://localhost';
const SERVER_PORT = Number(process.env.SERVER_PORT) || 30100;
const DB_URL = process.env.DBURL || 'mongodb://localhost:27017';
const DB_NAME = process.env.DB_NAME || 'my_db_ultimate_ai';

const ULTIMATE_AI = {
  CHAT_API_URL: process.env.SERVER_URL || 'https://chat.ultimate.ai/api',
  CHAT_API_KEY: process.env.CHAT_API_KEY || '825765d4-7f8d-4d83-bb03-9d45ac9c27c0',
  INTENT_MIN_CONFIDENCE: Number(process.env.INTENT_MIN_CONFIDENCE) || 0.6,
  INTENT_DEFAULT_ANSWER: process.env.INTENT_DEFAULT_ANSWER || 'the AI could not give the correct answer',
  INTENT_DEFAULT_NAME: process.env.INTENT_DEFAULT_NAME || 'UNKNOWN',

};
export {
  SERVER_PORT,
  SERVER_URL,
  NODE_ENV,
  ULTIMATE_AI,
  DB_URL,
  DB_NAME,

};
