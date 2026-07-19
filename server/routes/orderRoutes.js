import express from "express";

import {
  placeOrder,
  myOrders,
  getOrder,
  cancel,
  updateStatus,
  updatePayment,
} from "../controllers/orderController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Place Order
router.post("/", protect, placeOrder);

// My Orders
router.get("/", protect, myOrders);

// Get Single Order
router.get("/:id", protect, getOrder);

// Cancel Order
router.put("/:id/cancel", protect, cancel);

// Admin Update Order Status
router.put("/:id/status", protect, updateStatus);

// Payment Status Update
router.put("/:id/payment", protect, updatePayment);

export default router;