import './api';
import DB from './models';
import { insertIntentsData, clean } from './utils/fillDbWithReplies';

const init = async () => {
  await DB.connect();
  await clean();// Todo just once
  await insertIntentsData();// Todo just once
};
init().then(() => {});

// Caught other errors
process
  .on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at Promise', {
      reason,
      p,
    });
  })
  .on('uncaughtException', (err) => {
    console.error('Uncaught Exception thrown', {
      err,
    });
  });
