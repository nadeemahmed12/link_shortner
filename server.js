import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import linkRoutes from "./routes/links.js";
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;
const MONGO_URL = "mongodb://127.0.0.1:27017/linkshortener";
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

mongoose.connect(MONGO_URL, {});

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/links", linkRoutes);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

export {app};