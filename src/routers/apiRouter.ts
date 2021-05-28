import express from 'express';
import {
  getHome,
  postJoin,
  postLogin,
  getModify,
  postModify,
} from '../controllers/apiController';
import { isAuthenticated_cookie } from '../middlewares/jwt';
import routes from '../routes';

export const apiRouter: express.Router = express.Router();
apiRouter.get(routes.HOME, getHome);
apiRouter.post(routes.JOIN, postJoin);
apiRouter.post(routes.LOGIN, postLogin);
apiRouter.get(routes.USER_MODIFY, isAuthenticated_cookie, getModify);
apiRouter.post(routes.USER_MODIFY, isAuthenticated_cookie, postModify);
