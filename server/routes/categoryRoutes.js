import express from "express";

import {
  create,
  getCategories,
  getCategory,
  update,
  remove,
} from "../controllers/categoryController.js";

import {
  createCategoryValidator,
  updateCategoryValidator,
} from "../validators/categoryValidator.js";

import {
  protect,
  adminOnly,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.get("/", getCategories);
router.get("/:id", getCategory);

// Admin Routes
router.post(
  "/",
  protect,
  adminOnly,
  createCategoryValidator,
  create
);

router.put(
  "/:id",
  protect,
  adminOnly,
  updateCategoryValidator,
  update
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  remove
);

export default router;
