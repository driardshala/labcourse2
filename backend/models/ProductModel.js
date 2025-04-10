import mysqlPool from "../config/mysql.js";

// Get all products
export const getAllProducts = async () => {
  const [rows] = await mysqlPool.execute("SELECT * FROM products");
  return rows;
};

// Get product by ID
export const getProductById = async (id) => {
  const [rows] = await mysqlPool.execute("SELECT * FROM products WHERE id = ?", [id]);
  return rows[0];
};

// Create a new product
export const createProduct = async (name, description, price, stock) => {
  const [result] = await mysqlPool.execute(
    "INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)",
    [name, description, price, stock]
  );
  return result;
};

// Update an existing product
export const updateProduct = async (id, name, description, price, stock) => {
  const [result] = await mysqlPool.execute(
    "UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?",
    [name, description, price, stock, id]
  );
  return result;
};

// Delete a product
export const deleteProduct = async (id) => {
  const [result] = await mysqlPool.execute("DELETE FROM products WHERE id = ?", [id]);
  return result;
};
