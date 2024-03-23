import express from "express";
import {
  createProductController,
  deleteImageProductController,
  deleteProductController,
  getAllProductsController,
  getSingleProductController,
  updateProductController,
  updateProductImageController,
} from "../controllers/productController.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.get("/products", getAllProductsController);
router.get("/:id", getSingleProductController);
router.post("/add-product", isAuth, singleUpload, createProductController);
router.put("/:id", isAuth, updateProductController);
router.put("/image/:id", isAuth, singleUpload, updateProductImageController);
router.delete("/delete-image/:id", isAuth, deleteImageProductController);
router.delete("/delete-product/:id", isAuth, deleteProductController);

export default router;
