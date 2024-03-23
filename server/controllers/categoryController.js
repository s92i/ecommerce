import categoryModel from "../models/categoryModel.js";
import productModel from "../models/productModel.js";

export const createCategory = async (req, res) => {
  try {
    const { category } = req.body;
    if (!category) {
      return res.status(400).send({
        success: false,
        message: "Please provide category name",
      });
    }
    await categoryModel.create({ category });
    res.status(201).send({
      success: true,
      message: `${category} category created successfully`,
    });
  } catch (error) {
    console.log("Error in creating category", error);
    res.status(500).send({
      success: false,
      message: "Error in creating category",
      error,
    });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    res.status(200).send({
      success: true,
      message: "Categories fetch successful",
      categories,
    });
  } catch (error) {
    console.log("Error in getting categories", error);
    res.status(500).send({
      success: false,
      message: "Error in getting categories",
      error,
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await categoryModel.findById(req.params.id);
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }
    const products = await productModel.find({ category: category._id });
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      product.category = undefined;
      await product.save();
    }
    await category.deleteOne();
    res.status(200).send({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.log("Error deleting category", error);
    if (error.name === "CastError") {
      return res.status(500).send({
        success: false,
        message: "Invalid category id",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error deleting category",
      error,
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await categoryModel.findById(req.params.id);
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }
    const { updatedCategory } = req.body;
    const products = await productModel.find({ category: category._id });
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      product.category = updatedCategory;
      await product.save();
    }
    if (updatedCategory) category.category = updatedCategory;
    await category.save();
    res.status(200).send({
      success: true,
      message: "Category updated successfully",
    });
  } catch (error) {
    console.log("Error updating category", error);
    if (error.name === "CastError") {
      return res.status(500).send({
        success: false,
        message: "Invalid category id",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error updating category",
      error,
    });
  }
};
