import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';

import { apiRouter } from './routers/apiRouter';
const app: express.Application = express();
app.use(express.json());
app.use(helmet());
app.use('/', apiRouter);

export default app;
