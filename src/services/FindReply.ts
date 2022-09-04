import _ from 'lodash';
import { Intent, ReplyResponse } from '../types';
import { ULTIMATE_AI } from '../constants';
import Logger from '../utils/logger';
import { getReply } from '../repository/reply';
import { findIntents } from '../repository/intent';

class FindReply {
  // highest predicted intent above the confidence threshold
  findBestIntent(intent: Intent[]) {
    //! some confidence are in scientific notation
    const result = intent.sort((a, b) => (a.confidence < b.confidence ? 1 : -1));
    let best = null;
    if (_.isArray(result) && result.length > 0) {
      best = result[0];
      if (best.confidence > ULTIMATE_AI.INTENT_MIN_CONFIDENCE) {
        return best;
      }
    }
    Logger.log('Couldn\'t find best intent');
    return null;
  }

  // try to find and match a reply in db (MongoDB here)
  async findBestReply(intentName: string) {
    return getReply(intentName);
  }

  // Compose other functions to generate the final response for the API
  async generateReply(botId: string, message: string) : Promise<ReplyResponse> {
    // Todo what if we have an error in our response
    const data = await findIntents(botId, message);
    const bestIntent = this.findBestIntent(data.intents);

    const IntentName = bestIntent ? bestIntent.name : '';
    const reply = await this.findBestReply(IntentName);
    return { botId, message, reply };
  }
}
export default new FindReply();
