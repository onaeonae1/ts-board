import mongoose, { ObjectId } from 'mongoose';
import { Schema, Document, model, Types, Model } from 'mongoose';

import UserTypes from '../customTypes/userTypes';

const userSchema: Schema<UserDocument, UserModel> = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
      unique: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    //options
    timestamps: true,
  }
);
//for typescript
export interface User {
  user_id: string;
  userName: string;
  password: string;
  email: string;
}
// base document
interface UserBaseDocument extends User, Document {
  _id: Types.ObjectId;
  getTokenInfo(): UserTypes;
}
//export for strong typing
export interface UserDocument extends UserBaseDocument {}
//for model
export interface UserModel extends Model<UserDocument> {}
userSchema.methods.getTokenInfo = function (this: UserBaseDocument) {
  const user_id = this.user_id;
  const userName = this.userName;
  const email = this.email;
  const _id = this._id;
  return {
    user_id,
    userName,
    email,
    _id,
  };
};

export default model<UserDocument, UserModel>('User', userSchema);
