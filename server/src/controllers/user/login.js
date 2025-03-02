import User from "@/models/user";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await user.comparepassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Password not match" });
    }
    const token = await user.generateToken();
    return res.cookie("auth", token).json(user);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
