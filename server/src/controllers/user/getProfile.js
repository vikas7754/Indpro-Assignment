export const getProfile = async (req, res) => {
  const { user } = req;
  try {
    if (!user) {
      return res.status(200).json({});
    }
    user.password = "";
    user.token = "";
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
