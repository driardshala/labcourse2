import mysqlPool from "../config/mysql.js";

// SELECT all users
export const getAllUsers = async () => {
  const [rows] = await mysqlPool.execute("SELECT * FROM users");
  return rows;
};

// SELECT one user by ID
export const getUserById = async (id) => {
  const [rows] = await mysqlPool.execute("SELECT * FROM users WHERE id = ?", [id]);
  return rows[0];
};

// INSERT new user
export const createUser = async (name, email, password) => {
  const [result] = await mysqlPool.execute(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password]
  );
  return result;
};
