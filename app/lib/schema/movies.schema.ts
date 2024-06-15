import mongoose from "mongoose";
const {Schema} = mongoose;

const moviesSchema = new Schema({
  title: String,
  desc: String,
  duration: String,
  actors_name: String,
  thumbnail: String,
  category: String,
  keywords: String,
  job_id: String,
  active: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Movie || mongoose.model("Movie",moviesSchema);
