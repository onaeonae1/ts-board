import express from 'express';
import bcrypt from 'bcrypt';

import configs from '../config/default';
import User from '../models/users';

import { signToken } from '../middlewares/jwt';
export const joinController = (req: express.Request, res: express.Response) => {
  const { name, id, password } = req.body;
  res.send({ name });
};
export const getHome = (req: express.Request, res: express.Response) => {
  console.log('AaA');
  res.send('HELLO');
};
export const getJoin = (req: express.Request, res: express.Response) => {
  res.render('join.html');
};
export const postJoin = async (req: express.Request, res: express.Response) => {
  const { user_id, userName, password, password1, email } = req.body;
  //empty 값 팅기기
  if (
    user_id === '' ||
    userName === '' ||
    password === '' ||
    password1 === '' ||
    email === ''
  ) {
    res.status(400).send('Enter Informations');
  }
  if (password !== password1) {
    res.status(400).send('Please Check Password');
  }
  //bcrypt 적용
  let hashed_password = password;
  const saltRounds = configs.login_options.salt_rounds;
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      res.status(500).send('failed to generate salt');
    }
    bcrypt.hash(hashed_password, salt, async (err, hash) => {
      if (err) {
        res.status(500).send('failed to generate hash');
      }
      hashed_password = hash;
      try {
        const newUser = await User.create({
          user_id: user_id,
          email: email,
          userName: userName,
          password: hashed_password,
        });
        newUser.save();
        res.send(`Created new user : ${user_id}`);
      } catch (error) {
        res.status(400).send('Failed to Make User');
      }
    });
  });
  // 사용자 생성
};
export const getLogin = (req: express.Request, res: express.Response) => {
  res.render('login.html');
};
export const postLogin = async (
  req: express.Request,
  res: express.Response
) => {
  const { user_id, password } = req.body;
  const jwtSecret = configs.login_options.token_secret;
  if (user_id === '' || password === '') {
    res.status(400).send('Enter Informations');
  }
  const target_user = await User.findOne({
    user_id,
  });
  if (target_user) {
    const validPassword = await bcrypt.compare(
      password,
      target_user.get('password')
    );
    if (validPassword) {
      const token = signToken(target_user.getTokenInfo());
      res.clearCookie('accessToken');
      res.cookie('accessToken', token, { httpOnly: true });
      res.send('loginSuccess');
    } else {
      res.status(400).send('wrong password');
    }
  } else {
    res.status(400).send('failed to login : no such user');
  }
};
export const postModify = async (
  req: express.Request,
  res: express.Response
) => {
  console.log(req.user);
  res.send('postmodify in progress');
};
export const getModify = async (
  req: express.Request,
  res: express.Response
) => {
  console.log(req.user);
  res.render('modify.html');
};
