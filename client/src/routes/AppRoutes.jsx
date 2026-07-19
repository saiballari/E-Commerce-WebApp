import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ShopPage from "../pages/shop/ShopPage";
import ProductDetailsPage from "../pages/product/ProductDetailsPage";
import CartPage from "../pages/cart/CartPage";
import WishlistPage from "../pages/wishlist/WishlistPage";
import CheckoutPage from "../pages/checkout/CheckoutPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import NotFoundPage from "../pages/error/NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>

      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* User Dashboard */}
      <Route path="/dashboard/*" element={<DashboardPage />} />

      {/* Admin Dashboard */}
      <Route path="/admin/*" element={<AdminDashboardPage />} />

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;