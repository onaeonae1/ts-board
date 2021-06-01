import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

import { apiRouter } from './routers/apiRouter';
import { boardRouter } from './routers/boardRouter';
import UserTypes from './customTypes/userTypes';

declare global {
  namespace Express {
    interface Request {
      user: UserTypes;
    }
  }
}

const app: express.Application = express();
app.set('views', './views');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));
app.use('/', apiRouter);
app.use('/board', boardRouter);
export default app;
