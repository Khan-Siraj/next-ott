import mongoose from "mongoose";
const {Schema} = mongoose;
import bcrypt from "bcrypt";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true,"Name is required"]
  },
  email: {
    type: String,
    required: [true,"Email is required"]
  },
  password: {
    type: String,
    required: [true,"Password is required"]
  },
  image: String,
  created_at: {
    type: Date,
    default: Date.now
  }
});

// mongoose middleware
userSchema.pre("save",async function(next){
  this.password = await bcrypt.hash(this.password.toString(),12);
  next();
});


export default mongoose.models.User || mongoose.model("User",userSchema);
