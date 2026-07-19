import { uploadImage } from "../services/uploadService.js";

export const uploadProductImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image uploaded",
      });
    }

    const result = await uploadImage(req.file);

    res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      image: {
        url: result.secure_url,
        public_id: result.public_id,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};