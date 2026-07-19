import express from "express";

import {
  create,
  getProducts,
  getProduct,
  update,
  remove,
} from "../controllers/productController.js";

import {
  createProductValidator,
  updateProductValidator,
} from "../validators/productValidator.js";

import {
  protect,
  adminOnly,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.get("/", getProducts);
router.get("/:id", getProduct);

// Protected Admin Routes
router.post("/", protect, adminOnly, createProductValidator, create);

router.put(
  "/:id",
  protect,
  adminOnly,
  updateProductValidator,
  update
);

router.delete("/:id", protect, adminOnly, remove);

export default router;