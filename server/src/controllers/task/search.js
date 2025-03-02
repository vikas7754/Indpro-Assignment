import Task from "@/models/task";

export const search = async (req, res) => {
  const { query } = req.query;
  try {
    console.log(query);
    const regex = new RegExp(query, "i");
    const tasks = await Task.find({
      $or: [
        { title: regex },
        { description: regex },
        { categories: regex },
        { status: regex },
        { priority: regex },
      ],
    });
    console.log(tasks);
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
