import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      default: null,
    },
    isConfirm: {
      type: Boolean,
      default: false,
    },
    code: {
      type: String,
    },
  },
  { timestamps: true }
);

export const userModel = mongoose.model("User", UserSchema);
