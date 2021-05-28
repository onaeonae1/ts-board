import { ObjectId } from 'mongoose';
export default interface BoardTypes {
  title: string;
  content: string;
  writer: ObjectId;
}
