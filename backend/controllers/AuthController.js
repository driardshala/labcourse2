import { getAllUsers, getUserById, createUser, updateUser, deleteUser, getUserByEmail } from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // 1. Check if user exists
      const user = await getUserByEmail(email);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // 2. Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      // 3. Create token
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
  
      // 4. Respond with token
      res.json({ message: "Login successful", token });
    } catch (err) {
      res.status(500).json({ message: "Login failed", error: err.message });
    }
  };