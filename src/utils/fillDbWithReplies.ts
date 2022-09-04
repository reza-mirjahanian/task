import { removeAll, insertMany } from '../repository/reply';

export const clean = async () => {
  await removeAll();
};

export const insertIntentsData = async () => insertMany([
  {
    intentName: 'Greeting',
    text: 'Hello :) How can I help you?',
    description: 'The visitor says hello.',
  },
  {
    intentName: 'Goodbye',
    text: 'Goodbye, have a nice day!',
    description: 'The visitor says goodbye.',
  }, {
    intentName: 'Affirmative',
    text: 'Great!',
    description: 'The visitor confirms that something is true / correct.',
  }, {
    intentName: 'Negative',
    text: 'Alright, please let me know if I can help you with anything else!',
    description: 'The visitor confirms that they don\'t need help / something is not true or similar.',
  }, {
    intentName: 'Thank you',
    text: 'It was a pleasure to be of help :)',
    description: 'The visitor says thank you.',
  }, {
    intentName: 'Are you a bot?',
    text: 'I\'m an AI bot, and I\'m here to help you with your questions.',
    description: 'The visitor wants to know if they are talking to a bot or a human.',
  }, {
    intentName: 'I want to speak with a human',
    text: 'Let me transfer you to the first available agent.',
    description: 'The visitor wants to speak to a human agent.',
  }, {
    intentName: 'Login Problems',
    text: 'Oh no! Please give me your email and I will fix it.',
    description: 'The visitor has trouble logging in.',
  }, {
    intentName: 'Open or close account',
    text: 'Please follow these instructions "LINK" to open a new account.',
    description: 'The visitor wants to create a new account or close an existing one.',
  },
]);
export default async () => {
  await clean();
  await insertIntentsData();
};
