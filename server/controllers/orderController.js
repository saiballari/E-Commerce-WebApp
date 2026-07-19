import {
  createOrder,
  getOrders,
  getOrderById,
  cancelOrder,
  updateOrderStatus,
  updatePaymentStatus,
} from "../services/orderService.js";

// Place Order
export const placeOrder = async (req, res) => {
  try {
    const order = await createOrder({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// My Orders
export const myOrders = async (req, res) => {
  try {
    const orders = await getOrders(req.user._id);

    res.status(200).json({
      success: true,
      count: orders.length,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Order
export const getOrder = async (req, res) => {
  try {
    const order = await getOrderById(req.params.id);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

// Cancel Order
export const cancel = async (req, res) => {
  try {
    const order = await cancelOrder(req.params.id, req.user._id);

    res.status(200).json({
      success: true,
      message: "Order cancelled successfully",
      order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Admin Update Order Status
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await updateOrderStatus(req.params.id, status);

    res.status(200).json({
      success: true,
      message: "Order status updated successfully",
      order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Payment Status
export const updatePayment = async (req, res) => {
  try {
    const { paymentStatus } = req.body;

    const order = await updatePaymentStatus(
      req.params.id,
      paymentStatus
    );

    res.status(200).json({
      success: true,
      message: "Payment status updated successfully",
      order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};