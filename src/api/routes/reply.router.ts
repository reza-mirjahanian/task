import express from 'express';

import messageValidator from '../middlewares/message.validator';
import Logger from '../../utils/logger';
import FindReply from '../../services/FindReply';

const router = express.Router();

router.post('/api/reply', messageValidator, async (req, res) => {
  try {
    const {
      botId,
      message,
    } = req.body;

    const reply = await FindReply.generateReply(botId, message);
    res.json(reply);
  } catch (err) {
    Logger.error(req.path);
    res.status(500).send({
      error: 'Server Error',
    });
  }
});
export default router;
