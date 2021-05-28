import mongoose from 'mongoose';
import { Schema, Document, model } from 'mongoose';

import UserTypes from '../customTypes/userTypes';

export interface UserTypesModel extends UserTypes, Document {}
const userSchema: Schema = new mongoose.Schema(
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
export default model<UserTypesModel>('User', userSchema);
