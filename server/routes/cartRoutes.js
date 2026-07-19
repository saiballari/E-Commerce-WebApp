import express from "express";

import {
  addItem,
  getUserCart,
  updateItem,
  deleteItem,
  clearCart,
  cartTotal,
} from "../controllers/cartController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Add Product
router.post("/", protect, addItem);

// Get Cart
router.get("/", protect, getUserCart);

// Cart Total
router.get("/total", protect, cartTotal);

// Clear Cart (must be before /:id)
router.delete("/clear", protect, clearCart);

// Update Quantity
router.put("/:id", protect, updateItem);

// Delete Single Item
router.delete("/:id", protect, deleteItem);

export default router;