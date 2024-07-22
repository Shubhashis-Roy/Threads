import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";

dotenv.config();

connectDB();
const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server start ${PORT}`));
