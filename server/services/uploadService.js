import cloudinary from "../config/cloudinary.js";

export const uploadImage = async (file) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "ecommerce/products",
        },
        (error, result) => {
          if (error) return reject(error);

          resolve(result);
        }
      )
      .end(file.buffer);
  });
};