import { Router } from "express";
const router = Router();

import {
  createCategory,
  getCategoryById,
  getCategories,
  deleteCategory,
  updateCategory,
} from "@/controllers/category";
import { auth } from "@/middlewares/auth";

/**
 * @route POST api/category
 * @desc Create a new category
 * @access Private
 */
router.post("/", auth, createCategory);

/**
 * @route GET api/category/:id
 * @desc Get a category by ID
 * @access Private
 */
router.get("/:id", auth, getCategoryById);

/**
 * @route GET api/category
 * @desc Get all categories
 * @access Private
 */
router.get("/", auth, getCategories);

/**
 * @route DELETE api/category/:id
 * @desc Delete a category by ID
 * @access Private
 */
router.delete("/:id", auth, deleteCategory);

/**
 * @route PUT api/category/:id
 * @desc Update a category by ID
 * @access Private
 */
router.put("/:id", auth, updateCategory);

export default router;
