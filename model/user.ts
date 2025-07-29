import { Schema, model } from "mongoose";
import { IUser } from "../types/user";

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    maxLength: [150, `maximum allowed character is 150`],
    required: true,
    validate: {
      validator: (v: string) => /^[A-Za-z\s]+$/.test(v),
      message: (props) =>
        `"${props.value}" is not a valid name. Name can only contain Alhabets and space. Syntax "firstname lastname" or "firstName middleName lastName"`,
    },
  },
  email: {
    type: String,
    maxLength: [150, `maximum allowed character is 150`],
    required: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: (v: string) => /^[a-z0-9]+@[a-z0-9-]+\.[a-z]{2,6}$/.test(v),
      message: (props) => `"${props.value}" is not a valid email address.`,
    },
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
