import { validationResult } from "express-validator";

import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../services/categoryService.js";

// Create Category
export const create = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const category = await createCategory(req.body);

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Categories
export const getCategories = async (req, res) => {
  try {
    const categories = await getAllCategories();

    res.status(200).json({
      success: true,
      count: categories.length,
      categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Category
export const getCategory = async (req, res) => {
  try {
    const category = await getCategoryById(req.params.id);

    res.status(200).json({
      success: true,
      category,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Category
export const update = async (req, res) => {
  try {
    const category = await updateCategory(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      category,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Category
export const remove = async (req, res) => {
  try {
    const result = await deleteCategory(req.params.id);

    res.status(200).json({
      success: true,
      ...result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};