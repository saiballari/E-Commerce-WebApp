import Order from "../models/Order.js";

// Create Order
export const createOrder = async (orderData) => {
  return await Order.create(orderData);
};

// Get My Orders
export const getOrders = async (userId) => {
  return await Order.find({ user: userId })
    .populate("items.product")
    .sort({ createdAt: -1 });
};

// Get Single Order
export const getOrderById = async (orderId) => {
  const order = await Order.findById(orderId)
    .populate("items.product")
    .populate("user", "fullName email");

  if (!order) {
    throw new Error("Order not found");
  }

  return order;
};

// Cancel Order
export const cancelOrder = async (orderId, userId) => {
  const order = await Order.findOne({
    _id: orderId,
    user: userId,
  });

  if (!order) {
    throw new Error("Order not found");
  }

  if (order.orderStatus === "Delivered") {
    throw new Error("Delivered orders cannot be cancelled");
  }

  order.orderStatus = "Cancelled";

  await order.save();

  return order;
};

// Update Order Status (Admin)
export const updateOrderStatus = async (orderId, status) => {
  const order = await Order.findById(orderId);

  if (!order) {
    throw new Error("Order not found");
  }

  order.orderStatus = status;

  await order.save();

  return order;
};

// Update Payment Status
export const updatePaymentStatus = async (orderId, paymentStatus) => {
  const order = await Order.findById(orderId);

  if (!order) {
    throw new Error("Order not found");
  }

  order.paymentStatus = paymentStatus;

  await order.save();

  return order;
};