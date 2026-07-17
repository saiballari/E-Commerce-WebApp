import { validationResult } from "express-validator";
import {
  registerUser,
  loginUser,
} from "../services/authService.js";

// Register Controller
export const register = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const result = await registerUser(req.body);

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      ...result,
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return res.status(400).json({
      success: false,
      message: error.message,
      name: error.name,
      stack: error.stack,
    });
  }
};

// Login Controller
export const login = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const result = await loginUser(req.body);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      ...result,
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return res.status(401).json({
      success: false,
      message: error.message,
      name: error.name,
      stack: error.stack,
    });
  }
};