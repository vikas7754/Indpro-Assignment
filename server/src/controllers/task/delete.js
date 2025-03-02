import Task from "@/models/task";

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const deleteMultipleTasks = async (req, res) => {
  const { ids } = req.body;
  try {
    const tasks = await Task.deleteMany({ _id: { $in: ids } });
    if (!tasks) {
      return res.status(404).json({ message: "Tasks not found" });
    }
    return res.status(200).json({ message: "Tasks deleted successfully" });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
