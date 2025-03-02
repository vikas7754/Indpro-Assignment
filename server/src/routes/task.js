import { Router } from "express";
const router = Router();

import {
  createTask,
  getTask,
  getTasks,
  deleteTask,
  updateTask,
  updateTaskStatus,
  updateTaskPriority,
  updateMultipleTasksStatus,
  updateMultipleTasksPriority,
  deleteMultipleTasks,
  search,
} from "@/controllers/task";
import { auth } from "@/middlewares/auth";

/**
 * @route POST api/task
 * @desc Create a new task
 * @access Private
 */
router.post("/", auth, createTask);

/**
 * @route GET api/task/search
 * @desc Search tasks
 * @access Private
 */
router.get("/search", auth, search);

/**
 * @route GET api/task/:id
 * @desc Get a task by ID
 * @access Private
 */
router.get("/:id", auth, getTask);

/**
 * @route GET api/task
 * @desc Get all tasks
 * @access Private
 */
router.get("/", auth, getTasks);

/**
 * @route DELETE api/task
 * @desc Delete multiple tasks
 * @access Private
 */
router.delete("/", auth, deleteMultipleTasks);

/**
 * @route DELETE api/task/:id
 * @desc Delete a task by ID
 * @access Private
 */
router.delete("/:id", auth, deleteTask);

/**
 * @route PUT api/task/:id
 * @desc Update a task by ID
 * @access Private
 */
router.put("/:id", auth, updateTask);

/**
 * @route PATCH api/task/:id/status
 * @desc Update a task's status by ID
 * @access Private
 */
router.patch("/:id/status", auth, updateTaskStatus);

/**
 * @route PATCH api/task/:id/priority
 * @desc Update a task's priority by ID
 * @access Private
 */
router.patch("/:id/priority", auth, updateTaskPriority);

/**
 * @route PATCH api/task/status
 * @desc Update multiple tasks' status
 * @access Private
 */
router.patch("/status", auth, updateMultipleTasksStatus);

/**
 * @route PATCH api/task/priority
 * @desc Update multiple tasks' priority
 * @access Private
 */
router.patch("/priority", auth, updateMultipleTasksPriority);

export default router;
