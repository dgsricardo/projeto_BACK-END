import mongoose from "mongoose";
mongoose.connect(
  "mongodb+srv://admin:Zxr0Mzbhj7D1Xjwj@curso-elaborata.isvkdpy.mongodb.net/app_test"
);

const workSchema = new mongoose.Schema({
  title: String,
  description: String,
  categories: String,
});

const WorkModel = mongoose.model("Work", workSchema);

export default WorkModel;
