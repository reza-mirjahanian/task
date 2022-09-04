import Logger from '../utils/logger';

import { ULTIMATE_AI } from '../constants';
import { Reply } from '../types';
import ReplyModel from '../models/Reply';

type IntentData = {
  id: string // reply db id
  text: string // finial reply text (answer)
  description: string // some metadata!
} | undefined;

// Search an intent in MongoDB
export const find = async (intentName: string) : Promise<IntentData> => {
  try {
    const data = await ReplyModel.findOne({ intentName }).lean();

    if (data) {
      const { _id, text, description } = data;
      return {
        id: String(_id), text: text.toString(), description: description.toString(),
      };
    }
    return undefined;
  } catch (e) {
    console.log(e);
    Logger.error(`Repository:Reply:find: ${intentName}`);
    return undefined;
  }
};

/**
 * return an appropriate reply according to the predicted intent. Add default for not found cases
 *  @param {string} name - Intent name,Examples: "Greeting","Affirmative"
 * @return {Promise<Reply>} - Reply
 */
export const getReply = async (name: string) : Promise<Reply> => {
  const reply = {
    id: '',
    text: ULTIMATE_AI.INTENT_DEFAULT_ANSWER,
    isDefault: true,
    description: "didn't find anything, return a default reply message",
    intentName: ULTIMATE_AI.INTENT_DEFAULT_NAME,
  };

  try {
    const intentData: IntentData = await find(name);

    if (intentData) {
      reply.isDefault = false;
      reply.intentName = name;
      reply.text = intentData.text;
      reply.id = intentData.id;
      reply.description = intentData.description;
    }
  } catch (e) {
    Logger.error((e as Error).message);
  }

  return reply;
};

// Clean database model
export const removeAll = async () => {
  try {
    await ReplyModel.deleteMany();
    Logger.log(`All Replies is cleaned at: ${new Date()}`);
    return true;
  } catch (e) {
    Logger.error('Repository:Reply:removeAll()');
    return false;
  }
};

//Insert in DB
export const insertMany = async (docs: Pick<Reply, 'intentName' | 'text' | 'description'>[]) => {
  try {
    return await ReplyModel.insertMany(docs);
  } catch (e) {
    return false;
  }
};
