import express from "express";
import connectMongoDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
connectMongoDB();



app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
