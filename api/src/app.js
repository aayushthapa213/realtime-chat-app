import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import messageRouter from "./routes/auth.route.js";
import connectDB from "./lib/db.js";
import cookieParser from "cookie-parser"

const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config({ path: "../.env" });

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  connectDB();
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on port ${port}`);
});
