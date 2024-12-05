import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: { type: String, require: true },
  last_name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const UserMongo = mongoose.model("user", userSchema);

export default UserMongo;
