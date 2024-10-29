import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AllRoutes from "./routes/AllRoutes.js";
import mongoose from "mongoose";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { app, httpServer } from "./socket/socket.js";

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use("/api", AllRoutes);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    httpServer.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
