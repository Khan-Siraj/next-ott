import mongoose from "mongoose";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
// @ts-ignore
mongoose.connect(process.env.NEXT_PUBLIC_DB_URL,options);
export default mongoose;
