import Task from "@/models/task";

export const createTask = async (req, res) => {
  const { title, description, status, priority, dueDate, categories } =
    req.body;
  try {
    const task = new Task({
      user: req.user._id,
      title,
      description,
      status,
      priority,
      dueDate,
      categories,
    });
    await task.save();
    return res.status(201).json(task);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
