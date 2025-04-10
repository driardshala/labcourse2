import mysqlPool from "../config/mysql.js";

// Get all users
export const getAllUsers = async () => {
  const [rows] = await mysqlPool.execute("SELECT * FROM users");
  return rows;
};

// Get user by ID
export const getUserById = async (id) => {
  const [rows] = await mysqlPool.execute("SELECT * FROM users WHERE id = ?", [id]);
  return rows[0];
};

// Create a new user
export const createUser = async (name, email, password) => {
  const [result] = await mysqlPool.execute(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password]
  );
  return result;
};

// Update a user by ID
export const updateUser = async (id, name, email, password) => {
  const [result] = await mysqlPool.execute(
    "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?",
    [name, email, password, id]
  );
  return result;
};

// Delete a user by ID
export const deleteUser = async (id) => {
  const [result] = await mysqlPool.execute("DELETE FROM users WHERE id = ?", [id]);
  return result;
};
