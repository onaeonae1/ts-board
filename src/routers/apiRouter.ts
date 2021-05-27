import express from 'express';
import { homeController, tokenController } from '../controllers/apiController';
import routes from '../routes';

export const apiRouter: express.Router = express.Router();
apiRouter.get(routes.TOKEN, tokenController);
apiRouter.get(routes.HOME, homeController);
