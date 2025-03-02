import { config } from "dotenv";
config();

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import routes from "@/routes";

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection failed");
  }
};
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server" });
});

routes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
