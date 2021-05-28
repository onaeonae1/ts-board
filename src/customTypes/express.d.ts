import { UserTypesModel } from '../models/users';

declare global {
  namespace Express {
    interface Request {
      user: UserTypesModel;
    }
  }
}
