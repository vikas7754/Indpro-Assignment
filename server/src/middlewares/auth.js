import User from "@/models/user";

let auth = async (req, res, next) => {
  let token = req.cookies.auth;
  try {
    if (!token)
      return res.status(401).json({ message: "Please login or signup!" });
    const userDetail = await User.findByToken(token);
    if (!userDetail)
      return res.status(401).json({ message: "Please login or signup!" });
    req.user = userDetail;
    req.token = token;
    next();
  } catch (err) {
    return res.status(400).json({ message: "OOPS, Something went wrong!" });
  }
};

const adminAuth = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(401).json({ message: "You are not allowed!" });
  }
  next();
};

let isLogin = async (req, res, next) => {
  let token = req.cookies.auth;
  try {
    if (!token) return next();
    const userDetail = await User.findByToken(token);
    if (!userDetail) return next();
    req.user = userDetail;
    req.token = token;
    next();
  } catch (err) {
    return res.status(400).json({ message: err.message, err: err.message });
  }
};

export { auth, adminAuth, isLogin };
