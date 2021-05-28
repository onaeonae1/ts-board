import express from 'express';

import {
  getBoard,
  postWrite,
  postDelete,
  getUpdate,
  postUpdate,
} from '../controllers/boardController';
import routes from '../routes';
import { isAuthenticated_cookie } from '../middlewares/jwt';
export const boardRouter: express.Router = express.Router();
boardRouter.get(routes.BOARD, getBoard);
boardRouter.post(routes.BOARD_WRITE, isAuthenticated_cookie, postWrite);
boardRouter.post(routes.BOARD_DELETE, isAuthenticated_cookie, postDelete);
boardRouter.get(routes.BOARD_UPDATE, isAuthenticated_cookie, getUpdate);
boardRouter.post(routes.BOARD_UPDATE, isAuthenticated_cookie, postUpdate);
