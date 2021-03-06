import express from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import postRouter from "./routes/posts.js";
import categoryRouter from "./routes/categories.js";
import multer from "multer";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(express.json());

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use(helmet());

app.use(cors());
app.use(morgan("tiny"));

app.use("/lee", (req, res, next) => {
  console.log("Hey, This is my lee url");
  return res.status(200).send(console.log("success!"));
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res, next) => {
  res.status(200).json(`${__dirname}/images/${req.body.name}`);
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);
app.use("/api/category", categoryRouter);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Mongo DB Init!!"))
  .catch((error) => console.error(error));

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend is running!");
});
