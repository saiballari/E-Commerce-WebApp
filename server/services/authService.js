import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// Register User
export const registerUser = async ({ fullName, email, password }) => {
  // Check if user already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists with this email");
  }

  // Create user
  const user = await User.create({
    fullName,
    email,
    password,
  });

  // Generate JWT
  const token = generateToken(user._id);

  return {
    user: {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    },
    token,
  };
};

// Login User
export const loginUser = async ({ email, password }) => {
  // Get user with password
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Compare password
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    throw new Error("Invalid email or password");
  }

  // Update last login
  user.lastLogin = new Date();
  await user.save();

  // Generate JWT
  const token = generateToken(user._id);

  return {
    user: {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    },
    token,
  };
};