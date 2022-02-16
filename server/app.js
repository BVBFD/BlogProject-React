import express from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

app.use("/lee", (req, res, next) => {
  console.log("Hey, This is my lee url");
  return res.status(200).send(console.log("success!"));
});

app.use("/api/auth", authRoute);

app.use((req, res, next) => {
  res.sendStatus(404);
  // gitignore 실험 중
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Mongo DB Init!!"))
  .catch((error) => console.error(error));

app.listen("5000", () => {
  console.log("Backend is running!");
});
