import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String, // email is a string
      required: true,
      unique: true, // no two users can have the same email
    },
    password: {
      type: String,
      required: true,
      minLength: 6, // password must be at least 6 characters long
    },
    username: {
      type: String,
      required: true,
      unique: true, // not all users are admins
    },
    profilePic: {
      type: String,
      default: "",
    },
    followers: {
      type: [String],
      default: [],
    },
    following: {
      type: [String],
      default: [],
    },
    bio: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true, // automatically create createdAt and updatedAt fields
  }
);

const User = mongoose.model("User", userSchema);

export default User;
