import api from "./axios";

export const placeOrder = (data) =>
  api.post("/orders", data);

export const getMyOrders = () =>
  api.get("/orders/my-orders");

export const getOrder = (id) =>
  api.get(`/orders/${id}`);