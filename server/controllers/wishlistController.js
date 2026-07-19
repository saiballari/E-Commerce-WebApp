import {
  addToWishlist,
  getWishlist,
} from "../services/wishlistService.js";

// Add Wishlist
export const addItem = async (req, res) => {
  try {
    const { productId } = req.body;

    const wishlist = await addToWishlist(
      req.user._id,
      productId
    );

    res.status(201).json({
      success: true,
      message: "Product added to wishlist",
      wishlist,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Wishlist
export const getItems = async (req, res) => {
  try {
    const wishlist = await getWishlist(req.user._id);

    res.status(200).json({
      success: true,
      count: wishlist.length,
      wishlist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};