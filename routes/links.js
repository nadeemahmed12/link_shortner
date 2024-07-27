import express from "express";
import { createShortLink,getOriginalUrl,getAnalytics } from "../controllers/linkController.js";
const router = express.Router();
router.post("/shorten", createShortLink);
router.get("/:shortUrl", getOriginalUrl);
router.get("/:shortUrl/analytics", getAnalytics);
export default router;