import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: [true, "Email is required !!"],
  },
  password: {
    type: String,
    require: [true, "Password is required !!"],
  },
  about: String,
  profileURL: String,
});
export const User = mongoose.models.users || mongoose.model('users', userSchema);
