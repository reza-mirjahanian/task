import express from 'express';
import cors from 'cors';

import bodyParser from 'body-parser';
import {
  SERVER_PORT,
  SERVER_URL,
} from '../constants';

import Logger from '../utils/logger';
import replyRoute from './routes/reply.router';

const app = express();

app.use(cors({
  origin: '*',
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(replyRoute);

app.listen(SERVER_PORT, () => Logger.log(`✅  Ready on  ${SERVER_URL}:${SERVER_PORT}`));
