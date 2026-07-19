import express from "express";

import upload from "../middleware/uploadMiddleware.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
import { uploadProductImage } from "../controllers/uploadController.js";

const router = express.Router();

router.post(
  "/product",
  protect,
  adminOnly,
  upload.single("image"),
  uploadProductImage
);

export default router;