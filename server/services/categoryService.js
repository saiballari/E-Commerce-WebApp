import Category from "../models/Category.js";

// Create Category
export const createCategory = async (categoryData) => {
  const existingCategory = await Category.findOne({
    slug: categoryData.slug,
  });

  if (existingCategory) {
    throw new Error("Category already exists");
  }

  return await Category.create(categoryData);
};

// Get All Categories
export const getAllCategories = async () => {
  return await Category.find().sort({ createdAt: -1 });
};

// Get Single Category
export const getCategoryById = async (id) => {
  const category = await Category.findById(id);

  if (!category) {
    throw new Error("Category not found");
  }

  return category;
};

// Update Category
export const updateCategory = async (id, data) => {
  const category = await Category.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!category) {
    throw new Error("Category not found");
  }

  return category;
};

// Delete Category
export const deleteCategory = async (id) => {
  const category = await Category.findByIdAndDelete(id);

  if (!category) {
    throw new Error("Category not found");
  }

  return {
    message: "Category deleted successfully",
  };
};