import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

// Add Product to Cart
export const addToCart = async (userId, productId, quantity) => {
  const product = await Product.findById(productId);

  if (!product) {
    throw new Error("Product not found");
  }

  let cartItem = await Cart.findOne({
    user: userId,
    product: productId,
  });

  if (cartItem) {
    cartItem.quantity += quantity;
    await cartItem.save();
    return cartItem;
  }

  cartItem = await Cart.create({
    user: userId,
    product: productId,
    quantity,
  });

  return cartItem;
};

// Get User Cart
export const getCart = async (userId) => {
  return await Cart.find({ user: userId })
    .populate("product")
    .sort({ createdAt: -1 });
};

// Update Quantity
export const updateCartItem = async (cartId, quantity) => {
  const cart = await Cart.findById(cartId);

  if (!cart) {
    throw new Error("Cart item not found");
  }

  cart.quantity = quantity;
  await cart.save();

  return cart;
};

// Delete One Item
export const deleteCartItem = async (cartId) => {
  const cart = await Cart.findByIdAndDelete(cartId);

  if (!cart) {
    throw new Error("Cart item not found");
  }

  return {
    message: "Cart item removed successfully",
  };
};

// Clear Entire Cart
export const clearCartItems = async (userId) => {
  await Cart.deleteMany({ user: userId });

  return {
    message: "Cart cleared successfully",
  };
};

// Cart Total
export const getCartTotal = async (userId) => {
  const cart = await Cart.find({ user: userId }).populate("product");

  let subtotal = 0;
  let items = 0;

  cart.forEach((item) => {
    subtotal += item.product.price * item.quantity;
    items += item.quantity;
  });

  return {
    items,
    subtotal,
  };
};