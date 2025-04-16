import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name : {
    type: String,
    required : [true , "A user must have name"],
    unique : true
  },
    email: {
    type: String,
    required: [true, " A user must have email"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, " A user must have passoword"],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
