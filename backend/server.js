import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routers/userRoutes.js";
import postRoutes from "./routers/postRoutes.js";

dotenv.config();

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server start ${PORT}`));
