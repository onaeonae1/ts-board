import { Types } from 'mongoose';
export default interface UserTypes {
  user_id: string;
  userName: string;
  email: string;
  _id: Types.ObjectId;
}
