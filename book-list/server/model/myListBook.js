import mongoose from "mongoose";

const myListSchema = mongoose.Schema({
  author: String,
  title: String,
  comments: String,
  rating: String,
});

export default mongoose.model("MylistBook", myListSchema);
