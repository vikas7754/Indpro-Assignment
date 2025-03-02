import User from "@/models/user";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email is already in use" });
    }
    const newUser = new User({ email, password, name });
    const user = await newUser.save();
    const token = await user.generateToken();
    return res.cookie("auth", token).json(user);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
