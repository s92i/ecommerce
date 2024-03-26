import express from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import {
  createOrder,
  getOrderById,
  getOrders,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/create", isAuth, createOrder);
router.get("/orders", isAuth, getOrders);
router.get("/orders/:id", isAuth, getOrderById);

export default router;
