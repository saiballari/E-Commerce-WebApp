import { dashboardStats } from "../services/adminService.js";

export const getDashboard = async (req, res) => {
  try {
    const statistics = await dashboardStats();

    res.status(200).json({
      success: true,
      statistics,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};