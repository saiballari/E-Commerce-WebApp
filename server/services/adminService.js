import User from "../models/User.js";
import Product from "../models/Product.js";
import Category from "../models/Category.js";
import Order from "../models/Order.js";

export const dashboardStats = async () => {
  const users = await User.countDocuments();

  const products = await Product.countDocuments();

  const categories = await Category.countDocuments();

  const orders = await Order.countDocuments();

  const revenueData = await Order.find({
    paymentStatus: "Paid",
  });

  const revenue = revenueData.reduce((total, order) => {
    return total + order.totalAmount;
  }, 0);

  return {
    users,
    products,
    categories,
    orders,
    revenue,
  };
};