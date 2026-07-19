import { body } from "express-validator";

export const createCategoryValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Category name is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Category name must be between 2 and 50 characters"),

  body("slug")
    .trim()
    .notEmpty()
    .withMessage("Slug is required")
    .isLowercase()
    .withMessage("Slug must be lowercase"),
];

export const updateCategoryValidator = [
  body("name")
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("Category name must be between 2 and 50 characters"),

  body("slug")
    .optional()
    .trim()
    .isLowercase()
    .withMessage("Slug must be lowercase"),
];