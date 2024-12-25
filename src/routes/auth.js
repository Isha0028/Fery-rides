import User from "../models/user.js";
import express from 'express';
import bcrypt from  "bcryptjs";

const router = express.Router();
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

const salt= await bcrypt.genSalt(10);
const hashedPassword= await bcrypt.hash(password,salt);

  if (!username || !password) {
    return res.status(400).json({message: "Username and password are required"});
  }
  

  try {
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Username already exists" });
    } else {
      res.status(500).json({ message: "Server error" });
    }
  }
});

export default router;
