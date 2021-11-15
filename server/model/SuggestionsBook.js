import mongoose from "mongoose";

const suggestionsSchema = mongoose.Schema({
  id: Number,
  author: String,
  title: String,
  image: String,
});

export default mongoose.model("SuggestionsBook", suggestionsSchema);
