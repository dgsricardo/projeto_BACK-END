import mongoose from "mongoose";
import express from "express";
import routes from "./routes/routes.js";
import authRoutes from "./routes/authRoutes.js";
const app = express();

mongoose.connect(
  "mongodb+srv://admin:Zxr0Mzbhj7D1Xjwj@curso-elaborata.isvkdpy.mongodb.net/app_test"
);

app.use(express.json());

app.use("/api", routes);
app.use("/api", authRoutes);
app.listen(3000, () => {
  console.log("Servidor rodando!");
});
