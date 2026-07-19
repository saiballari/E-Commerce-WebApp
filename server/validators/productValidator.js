import { body } from "express-validator";

export const createProductValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Product name is required")
    .isLength({ min: 3, max: 100 })
    .withMessage("Product name must be between 3 and 100 characters"),

  body("slug")
    .trim()
    .notEmpty()
    .withMessage("Product slug is required"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Product description is required")
    .isLength({ min: 10 })
    .withMessage("Description must be at least 10 characters"),

  body("brand")
    .trim()
    .notEmpty()
    .withMessage("Brand is required"),

  body("category")
    .notEmpty()
    .withMessage("Category is required"),

  body("sku")
    .trim()
    .notEmpty()
    .withMessage("SKU is required"),

  body("price")
    .isFloat({ min: 0 })
    .withMessage("Price must be greater than or equal to 0"),

  body("discountPrice")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Discount price cannot be negative"),

  body("stock")
    .isInt({ min: 0 })
    .withMessage("Stock cannot be negative"),
];

export const updateProductValidator = [
  body("name")
    .optional()
    .isLength({ min: 3, max: 100 }),

  body("description")
    .optional()
    .isLength({ min: 10 }),

  body("brand")
    .optional(),

  body("price")
    .optional()
    .isFloat({ min: 0 }),

  body("discountPrice")
    .optional()
    .isFloat({ min: 0 }),

  body("stock")
    .optional()
    .isInt({ min: 0 }),
];