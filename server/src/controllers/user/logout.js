import User from "@/models/user";

export const logout = async (req, res) => {
  try {
    const user = await User.findByToken(req.cookies.auth);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    await user.deleteToken();
    res.clearCookie("auth");
    return res.status(200).json({ message: "Logout success" });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
