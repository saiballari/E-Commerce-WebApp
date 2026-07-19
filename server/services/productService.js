import Product from "../models/Product.js";
import "../models/Category.js";

// Create Product
export const createProduct = async (productData) => {
  const product = await Product.create(productData);
  return product;
};

// Get All Products (Search + Filter + Pagination + Sorting)
export const getAllProducts = async (queryParams) => {
  const {
    keyword,
    category,
    minPrice,
    maxPrice,
    page = 1,
    limit = 10,
    sortBy,
  } = queryParams;

  let query = {};

  // Search by product name
  if (keyword) {
    query.name = {
      $regex: keyword,
      $options: "i",
    };
  }

  // Category Filter
  if (category) {
    query.category = category;
  }

  // Price Filter
  if (minPrice || maxPrice) {
    query.price = {};

    if (minPrice) {
      query.price.$gte = Number(minPrice);
    }

    if (maxPrice) {
      query.price.$lte = Number(maxPrice);
    }
  }

  // Sorting
  let sortOption = { createdAt: -1 };

  if (sortBy === "priceLow") {
    sortOption = { price: 1 };
  } else if (sortBy === "priceHigh") {
    sortOption = { price: -1 };
  } else if (sortBy === "newest") {
    sortOption = { createdAt: -1 };
  }

  return await Product.find(query)
    .populate("category", "name slug")
    .populate("createdBy", "fullName email")
    .sort(sortOption)
    .skip((Number(page) - 1) * Number(limit))
    .limit(Number(limit));
};

// Get Single Product
export const getProductById = async (id) => {
  const product = await Product.findById(id)
    .populate("category", "name slug")
    .populate("createdBy", "fullName email");

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};

// Update Product
export const updateProduct = async (id, updatedData) => {
  const product = await Product.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};

// Delete Product
export const deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);

  if (!product) {
    throw new Error("Product not found");
  }

  return {
    message: "Product deleted successfully",
  };
};