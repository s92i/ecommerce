import express from "express";
import {
  getUserProfileController,
  loginController,
  logoutController,
  registerController,
  updateAvatar,
  updatePasswordController,
  updateProfileController,
} from "../controllers/userController.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/profile", isAuth, getUserProfileController);
router.get("/logout", isAuth, logoutController);
router.put("/profile-update", isAuth, updateProfileController);
router.put("/update-password", isAuth, updatePasswordController);
router.put("/update-avatar", isAuth, singleUpload, updateAvatar);

export default router;
