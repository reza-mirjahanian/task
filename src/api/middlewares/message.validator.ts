import {
  Validator,
} from 'node-input-validator';
import * as express from 'express';

export default async (req:express.Request, res:express.Response, next:express.NextFunction) => {
  const {
    botId,
    message,
  } = req.body;

  const v = new Validator({
    botId,
    message,
  }, {
    botId: 'required|string|minLength:5',
    message: 'required|string|minLength:2',
  });

  if (await v.fails()) {
    res.status(400).send({
      error: 'Your data Id is invalid',
    });
  } else {
    next();
  }
};
