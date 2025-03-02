import User from "@/models/user";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const user = new User({ email, password, name });
    await user.save();
    const token = await user.generateToken();
    return res.cookie("auth", token).json(user);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
