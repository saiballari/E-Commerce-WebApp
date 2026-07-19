import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      default: 1,
      min: [1, "Quantity must be at least 1"],
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate products for same user
cartSchema.index({ user: 1, product: 1 }, { unique: true });

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;