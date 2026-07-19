import {
  addToCart,
  getCart,
  updateCartItem,
  deleteCartItem,
  clearCartItems,
  getCartTotal,
} from "../services/cartService.js";

// Add Item
export const addItem = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const cart = await addToCart(
      req.user._id,
      productId,
      Number(quantity) || 1
    );

    res.status(201).json({
      success: true,
      message: "Product added to cart",
      cart,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Cart
export const getUserCart = async (req, res) => {
  try {
    const cart = await getCart(req.user._id);

    res.status(200).json({
      success: true,
      count: cart.length,
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Cart
export const updateItem = async (req, res) => {
  try {
    const { quantity } = req.body;

    const cart = await updateCartItem(req.params.id, Number(quantity));

    res.status(200).json({
      success: true,
      message: "Cart updated successfully",
      cart,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Item
export const deleteItem = async (req, res) => {
  try {
    const result = await deleteCartItem(req.params.id);

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

// Clear Cart
export const clearCart = async (req, res) => {
  try {
    const result = await clearCartItems(req.user._id);

    res.status(200).json({
      success: true,
      ...result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Cart Total
export const cartTotal = async (req, res) => {
  try {
    const total = await getCartTotal(req.user._id);

    res.status(200).json({
      success: true,
      ...total,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};