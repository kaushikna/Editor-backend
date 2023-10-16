const User = require("../models/User");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const jwt = require('jsonwebtoken')
exports.userAuth = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign({ userId: user.id }, "cvfhvgh", {
          expiresIn: "1h",
        });
        res.json({ token, user });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      res.status(401).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
};
exports.signUp = async (req, res) => {
  const { email, password } = req.body;
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ error: "Password should be at least 8 characters long" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const uniqueID = uuidv4();
    const user = await User.create({
      email,
      password: hashedPassword,
      uniqueID
    });

    res.json({ id: user.id, email: user.email, password: user.password });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message});
  }
};
