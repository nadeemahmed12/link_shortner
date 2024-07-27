import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import linkRoutes from "./routes/links.js";
const app = express();
const PORT = 3000;
const MONGO_URL = "mongodb://127.0.0.1:27017/linkshortener";
mongoose.connect(MONGO_URL, {});
app.use(bodyParser.json());
app.use("/api/links", linkRoutes);
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

export {app};