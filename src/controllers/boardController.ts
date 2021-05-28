import express from 'express';

import Board from '../models/boards';
export const getBoard = async (req: express.Request, res: express.Response) => {
  const boardAll = await Board.find({});
  res.send(boardAll);
};
export const postWrite = async (
  req: express.Request,
  res: express.Response
) => {
  const {} = req.body;
};
export const postDelete = async (
  req: express.Request,
  res: express.Response
) => {};
export const getUpdate = async (
  req: express.Request,
  res: express.Response
) => {};
export const postUpdate = async (
  req: express.Request,
  res: express.Response
) => {};
