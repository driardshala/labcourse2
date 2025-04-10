import { getAllUsers, getUserById, createUser } from "../models/UserModel.js";

// GET /api/users
export const fetchUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err.message });
  }
};

// GET /api/users/:id
export const fetchUserById = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user", error: err.message });
  }
};

// POST /api/users
export const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const result = await createUser(name, email, password);
    res.status(201).json({ message: "User created", userId: result.insertId });
  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err.message });
  }
};
