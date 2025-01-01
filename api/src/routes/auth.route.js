import Router from "express";
import {
  login,
  signup,
  logout,
  updateProfile,
  checkAuth,
} from "../controllers/auth.controller.js";
import protectRoute from "../middleware/auth.middleware.js";

const authRouter = Router();

authRouter.post("/signup", signup);

authRouter.post("/login", login);

authRouter.post("/logout", logout);

authRouter.put("/update-profile", protectRoute, updateProfile);

authRouter.get("/check", protectRoute, checkAuth);

export default authRouter;
