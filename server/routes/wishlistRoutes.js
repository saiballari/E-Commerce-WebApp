import express from "express";

import {
  addItem,
  getItems,
} from "../controllers/wishlistController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Add Product to Wishlist
router.post("/", protect, addItem);

// Get Logged-in User Wishlist
router.get("/", protect, getItems);

export default router;