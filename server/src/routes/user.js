import { Router } from "express";
const router = Router();

import signupValidation from "@/validations/signup";
import loginValidation from "@/validations/login";
import { signup, login, logout, getProfile } from "@/controllers/user";
import { isLogin } from "@/middlewares/auth";

/**
 * @route POST api/user/signup
 * @desc Register user
 * @access Public
 */
router.post("/signup", signupValidation, signup);

/**
 * @route POST api/user/login
 * @desc Login user
 * @access Public
 */
router.post("/login", loginValidation, login);

/**
 * @route POST api/user/logout
 * @desc Logout user
 * @access Private
 */
router.post("/logout", logout);

/**
 * @route GET api/user/me
 * @desc Get current user
 * @access Private
 */
router.get("/me", isLogin, getProfile);

export default router;
