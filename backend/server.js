import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDB();
const app = express();

app.use(express.json()); // to parse json data in the body
app.use(express.urlencoded({ extended: true })); // to parse form data in the body
app.use(cookieParser());

// routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serve at http://localhost:${PORT}`);
});
