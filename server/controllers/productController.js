import productModel from "../models/productModel.js";
import cloudinary from "cloudinary";
import { getDataUri } from "../utils/features.js";

export const getAllProductsController = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).send({
      success: true,
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    console.log("Error in fetching products", error);
    res.status(500).send({
      success: false,
      message: "Error in fetching products",
      error,
    });
  }
};

export const getSingleProductController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(404).send({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Products found",
      product,
    });
  } catch (error) {
    console.log("Error fetching product", error);
    if (error.name === "CastError") {
      return res.status(500).send({
        success: false,
        message: "Invalid product id",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error fetching product",
      error,
    });
  }
};

export const createProductController = async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;
    if (!name || !description || !price || !stock) {
      return res.status(500).send({
        success: false,
        message: "Please provide all fields",
      });
    }
    const file = getDataUri(req.file);
    const cdb = await cloudinary.v2.uploader.upload(file.content);
    const image = {
      public_id: cdb.public_id,
      url: cdb.secure_url,
    };
    if (!req.file) {
      return res.status(500).send({
        success: false,
        message: "Please provide product image",
      });
    }
    await productModel.create({
      name,
      description,
      price,
      category,
      stock,
      images: [image],
    });
    res.status(201).send({
      success: true,
      message: "Product created successfully",
    });
  } catch (error) {
    console.log("Error in adding product", error);
    res.status(500).send({
      success: false,
      message: "Error in adding product",
      error,
    });
  }
};

export const updateProductController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(404).send({
        success: false,
        message: "Product not found",
      });
    }
    const { name, description, price, stock, category } = req.body;
    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = price;
    if (stock) product.stock = stock;
    if (category) product.category = category;
    await product.save();
    res.status(200).send({
      success: true,
      message: "Product updated successfully",
    });
  } catch (error) {
    console.log("Error in updating product", error);
    res.status(500).send({
      success: false,
      message: "Error in updating product",
      error,
    });
  }
};

export const updateProductImageController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(404).send({
        success: false,
        message: "Product not found",
      });
    }
    if (!req.file) {
      return res.status(404).send({
        success: false,
        message: "Product image not found",
      });
    }
    const file = getDataUri(req.file);
    const cdb = await cloudinary.v2.uploader.upload(file.content);
    const image = {
      public_id: cdb.public_id,
      url: cdb.secure_url,
    };
    product.images.push(image);
    await product.save();
    res.status(200).send({
      success: true,
      message: "Product image updated successfully",
    });
  } catch (error) {
    console.log("Error updating product image", error);
    if (error.name === "CastError") {
      return res.status(500).send({
        success: false,
        message: "Invalid product id",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error updating product image",
      error,
    });
  }
};

export const deleteImageProductController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(404).send({
        success: false,
        message: "Product not found",
      });
    }
    const id = req.query.id;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Product image not found",
      });
    }
    let exist = -1;
    product.images.forEach((item, index) => {
      if (item._id.toString() === id.toString()) exist = index;
    });
    if (exist < 0) {
      return res.status(404).send({
        success: false,
        message: "Image not found",
      });
    }
    await cloudinary.v2.uploader.destroy(product.images[exist].public_id);
    product.images.splice(exist, 1);
    await product.save();
    return res.status(200).send({
      success: true,
      message: "Product image deleted successfully",
    });
  } catch (error) {
    console.log("Error deleting product image", error);
    if (error.name === "CastError") {
      return res.status(500).send({
        success: false,
        message: "Invalid product id",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error deleting product image",
      error,
    });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(404).send({
        success: false,
        message: "Product not found",
      });
    }
    for (let index = 0; index < product.images.length; index++) {
      await cloudinary.v2.uploader.destroy(product.images[index].public_id);
    }
    await product.deleteOne();
    res.status(200).send({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log("Error deleting product", error);
    if (error.name === "CastError") {
      return res.status(500).send({
        success: false,
        message: "Invalid product id",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error deleting product",
      error,
    });
  }
};
