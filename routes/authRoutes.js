import express from "express";
import mongoose from "mongoose";
const router = express.Router();

const authenticationSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const Authentication = mongoose.model("Authentication", authenticationSchema);

router.post("/auth", async (req, res) => {
  try {
    //const authentication = await Authentication.find();
    const auth = await Authentication.findOne({
      email: req.body.email,
    });
    console.log(auth);
    //res.status(200).json({ message: "usuario encontrado", token: "123456456456" });
    if (auth === null) {
      res.status(404).json({ message: "usuario nao encontrado" });
    } else {
      res.status(200).json({ message: "usuario encontrado" });
    }
  } catch (err) {
    console.log(err);
  }
});

export default router;
