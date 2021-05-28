import jsonwebtoken, { JsonWebTokenError } from 'jsonwebtoken';
import express from 'express';

import configs from '../config/default';

export const signToken = (payload: Object) => {
  const jwtSecret = configs.login_options.token_secret;
  const token = jsonwebtoken.sign(payload, jwtSecret, {
    expiresIn: 60 * 10,
  });
  return token;
};
export const verifyToken = (token: string) => {
  const jwtSecret = configs.login_options.token_secret;
  try {
    const decoded_token = jsonwebtoken.verify(token, jwtSecret);
    return decoded_token;
  } catch (error) {
    console.log(error);
    return false;
  }
};
// jwt-cookie
export const isAuthenticated_cookie = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (!req.cookies.accessToken) {
    res.status(400).send('you need to login');
  } else {
    const { accessToken } = req.cookies;
    const userData = verifyToken(accessToken);
    if (!userData) {
      res.status(400).send('token expired');
    } else {
      next();
    }
  }
};
