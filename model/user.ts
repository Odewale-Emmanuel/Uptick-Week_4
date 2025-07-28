import { Schema, model } from "mongoose";
import { IUser } from "../types/user";

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    maxLength: 150,
    required: true,
  },
  email: {
    type: String,
    maxLength: 250,
    required: true,
    lowercase: true,
    unique: true,
  },
  created_at: {
    type: Date,
    immutable: true,
    default: () => new Date(),
  },
  updated_at: {
    type: Date,
    default: () => new Date(),
  },
});

export default model<IUser>("user", userSchema);
