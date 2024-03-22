import express from "express";
import morgan from "morgan";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";

import connectDB from "./config/db.js";
import user from "./routes/userRoute.js";

dotenv.config();

connectDB();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/user", user);

const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV;

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} on ${ENV}`.bgMagenta.white);
});
