import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/products")
      .then((res) => setProducts(res.data.slice(0, 4))) // show first 4
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  return (
    <div>
      <header style={{ padding: "2rem", textAlign: "center" }}>
        <h1>🛍️ Welcome to Hazrolli Shop</h1>
        <p>Your one-stop destination for awesome products!</p>
        <div style={{ marginTop: "1rem" }}>
          <Link to="/products">View All Products</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/register">Register</Link>
        </div>
      </header>

      <section style={{ padding: "1rem 2rem" }}>
        <h2>🔥 Featured Products</h2>
        {products.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {products.map((product) => (
              <div key={product.id} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", width: "200px" }}>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
