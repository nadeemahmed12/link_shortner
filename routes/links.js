import express from "express";
import { createShortLink, getOriginalUrl, getAnalytics } from "../controllers/linkController.js";

const router = express.Router();

router.post("/", createShortLink);
router.get("/:id", getOriginalUrl);
router.get("/analytics/:id", getAnalytics);

export default router;