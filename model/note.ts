import { Schema, model } from "mongoose";
import { INote } from "../types/note";

const noteSchema = new Schema<INote>({
  title: {
    type: String,
    maxLength: 150,
    required: true,
  },
  content: {
    type: String,
    maxLength: 10000,
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
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

export default model<INote>("note", noteSchema);
