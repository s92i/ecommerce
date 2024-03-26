import express from "express";
import {
  getUserProfile,
  login,
  logout,
  register,
  updateAvatar,
  updatePassword,
  updateProfile,
} from "../controllers/userController.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", isAuth, getUserProfile);
router.get("/logout", isAuth, logout);
router.put("/profile-update", isAuth, updateProfile);
router.put("/update-password", isAuth, updatePassword);
router.put("/update-avatar", isAuth, singleUpload, updateAvatar);

export default router;
