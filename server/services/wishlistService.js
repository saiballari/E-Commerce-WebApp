import Wishlist from "../models/Wishlist.js";
import Product from "../models/Product.js";

// Add to Wishlist
export const addToWishlist = async (userId, productId) => {
  const product = await Product.findById(productId);

  if (!product) {
    throw new Error("Product not found");
  }

  const existing = await Wishlist.findOne({
    user: userId,
    product: productId,
  });

  if (existing) {
    throw new Error("Product already exists in wishlist");
  }

  return await Wishlist.create({
    user: userId,
    product: productId,
  });
};

// Get Wishlist
export const getWishlist = async (userId) => {
  return await Wishlist.find({ user: userId })
    .populate("product")
    .sort({ createdAt: -1 });
};