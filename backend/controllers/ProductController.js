import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../models/ProductModel.js";

// GET /api/products
export const fetchProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products", error: err.message });
  }
};

// GET /api/products/:id
export const fetchProductById = async (req, res) => {
  try {
    const product = await getProductById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Error fetching product", error: err.message });
  }
};

// POST /api/products
export const addProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;
  try {
    const result = await createProduct(name, description, price, stock);
    res.status(201).json({ message: "Product created", productId: result.insertId });
  } catch (err) {
    res.status(500).json({ message: "Error creating product", error: err.message });
  }
};

// PUT /api/products/:id
export const updateProductDetails = async (req, res) => {
  const { name, description, price, stock } = req.body;
  try {
    const result = await updateProduct(req.params.id, name, description, price, stock);
    if (result.affectedRows === 0) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product updated" });
  } catch (err) {
    res.status(500).json({ message: "Error updating product", error: err.message });
  }
};

// DELETE /api/products/:id
export const removeProduct = async (req, res) => {
  try {
    const result = await deleteProduct(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting product", error: err.message });
  }
};
