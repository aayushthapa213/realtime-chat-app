import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import messageRouter from "./routes/message.route.js";
import connectDB from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js";

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());

dotenv.config({ path: "../.env" });

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);

const port = process.env.PORT || 3000;

server.listen(port, (err) => {
  connectDB();
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on port ${port}`);
});
