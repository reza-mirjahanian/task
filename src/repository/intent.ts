import got from 'got';
import _ from 'lodash';
import Logger from '../utils/logger';

import { ULTIMATE_AI } from '../constants';
import { Intent } from '../types';

type Response = {
  intents: Intent[];
  error: boolean
};

/**
 * www.ultimate.ai API
 * Get predicted intents for a visitor message and bot
 *  @param {string} botId - Identifier of bot, example: 5f74865056d7bb000fcd39ff
 *  @param {string} message - Visitor message. The message to analyze, example: Hello this is a chat message
 * @return {Promise<Array>} - Intents
 */
export const findIntents = async (botId: string, message: string): Promise<Response> => {
// todo input validation, mongodbID
  try {
    const { intents }: Response = await got
      .post(`${ULTIMATE_AI.CHAT_API_URL}/intents`, {
        json: {
          botId,
          message,
        },
        headers: {
          authorization: ULTIMATE_AI.CHAT_API_KEY,
        },
      })
      .json();

    if (!_.isArray(intents)) {
      throw Error('intents must be an array from ULTIMATE.AI server');
    }

    return {
      intents,
      error: false,
    };
  } catch (e) {
    Logger.error((e as Error).message);
    return {
      intents: [],
      error: true,
    };
  }
};
