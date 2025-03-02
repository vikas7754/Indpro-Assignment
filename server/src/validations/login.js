import v from "validator";

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;
  if (v.isEmpty(email)) {
    return res.status(400).json({ message: "Email is required" });
  }
  if (!v.isEmail(email)) {
    return res.status(400).json({ message: "Email is invalid" });
  }
  if (v.isEmpty(password)) {
    return res.status(400).json({ message: "Password is required" });
  }

  next();
};

export default loginValidation;
