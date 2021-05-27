import express from 'express';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
import configs from '../config/default';

dotenv.config();

export const tokenController = (
  req: express.Request,
  res: express.Response
) => {
  const { id, password } = req.query;
  const jwtSecret = configs.token_secret;
  const token = jsonwebtoken.sign({ id, password }, jwtSecret);
  const decoded_token = jsonwebtoken.decode(token);
  res.send({
    token,
    decoded_token,
  });
};

export const joinController = (req: express.Request, res: express.Response) => {
  const { name, id, password } = req.body;
  res.send({ name });
};

export const homeController = (req: express.Request, res: express.Response) => {
  res.send('HELLO');
};
