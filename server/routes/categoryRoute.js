import express from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.get("/categories", getCategories);
router.post("/add-category", isAuth, createCategory);
router.delete("/delete-category/:id", isAuth, deleteCategory);
router.put("/update-category/:id", isAuth, updateCategory);

export default router;
