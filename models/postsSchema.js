import mongoose from "mongoose";
mongoose.connect(
  "mongodb+srv://admin:Zxr0Mzbhj7D1Xjwj@curso-elaborata.isvkdpy.mongodb.net/app_test"
);

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  // categories: mongoose.Schema.Types.ObjectId
  categories: String,
});

const PostModel = mongoose.model("Post", postSchema);

export default PostModel;
