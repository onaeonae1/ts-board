import mongoose from 'mongoose';
import { Schema, Document, model } from 'mongoose';

import BoardTypes from '../customTypes/boardTypes';

export interface BoardTypesModel extends BoardTypes, Document {}
const boardSchema: Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    writer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);
export default model<BoardTypesModel>('Board', boardSchema);
