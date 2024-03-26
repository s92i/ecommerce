import express from "express";
import {
  createProduct,
  deleteProductImage,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  updateProductImage,
} from "../controllers/productController.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.post("/add-product", isAuth, singleUpload, createProduct);
router.get("/:id", getProduct);
router.put("/:id", isAuth, updateProduct);
router.put("/image/:id", isAuth, singleUpload, updateProductImage);
router.delete("/delete-image/:id", isAuth, deleteProductImage);
router.delete("/delete-product/:id", isAuth, deleteProduct);

export default router;
