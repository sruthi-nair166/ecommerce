const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const register = async (req, res) => {
  const { email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    password: hashedPassword,
    role: role || "user",
  });

  res.json({ message: "User registered", user });
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { email: user.email, role: user.role, id: user._id },
      process.env.JWT_SECRET,
    );

    res.json({ token });
  } catch (err) {
    console.log("LOGIN ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { register, login };
