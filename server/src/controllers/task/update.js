import Task from "@/models/task";

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status, priority, dueDate, categories } =
    req.body;
  try {
    const task = await Task.findByIdAndUpdate(
      id,
      { title, description, status, priority, dueDate, categories },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json(task);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(id, { status }, { new: true });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json(task);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const updateTaskPriority = async (req, res) => {
  const { id } = req.params;
  const { priority } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(id, { priority }, { new: true });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json(task);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const updateMultipleTasksStatus = async (req, res) => {
  const { ids, status } = req.body;
  try {
    const tasks = await Task.updateMany(
      { _id: { $in: ids } },
      { status },
      { new: true }
    );
    return res.status(200).json(tasks);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const updateMultipleTasksPriority = async (req, res) => {
  const { ids, priority } = req.body;
  try {
    const tasks = await Task.updateMany(
      { _id: { $in: ids } },
      { priority },
      { new: true }
    );
    return res.status(200).json(tasks);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
