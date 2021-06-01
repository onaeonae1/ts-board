import UserTypes from './userTypes';

declare global {
  namespace Express {
    interface Request {
      user: UserTypes;
    }
  }
}
