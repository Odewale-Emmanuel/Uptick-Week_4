import mongoose, { Document } from "mongoose";
interface INote extends Document {
  title: string;
  content: string;
  user_id: mongoose.Types.ObjectId;
  created_at: Date;
  updated_at: Date;
}

export { INote };
