import express from "express";
import { createShortLink, getOriginalUrl, getAnalytics } from "../controllers/linkController.js";

const router = express.Router();

router.post("/", createShortLink);
router.get("/:shortUrl", getOriginalUrl);
router.get("/analytics/:shortUrl", getAnalytics);

export default router;