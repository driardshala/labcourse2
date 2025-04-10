import express from "express";
import dotenv from "dotenv";
import connectMongoDB from "./config/db.js";
import mysqlPool from "./config/mysql.js";
import { swaggerUi, swaggerSpec } from "./config/swagger.js";
import userRoutes from "./routes/UserRoutes.js";

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectMongoDB();

// ✅ Test MySQL Connection
mysqlPool.getConnection()
  .then(conn => {
    console.log("✅ Connected to MySQL");
    conn.release(); // Always release the connection back to the pool
  })
  .catch(err => {
    console.error("❌ MySQL connection error:", err.message);
    process.exit(1); // Exit if DB connection fails
  });

  

// Swagger route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Routes
app.use("/api", userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📘 Swagger docs at http://localhost:${PORT}/api-docs`);
});
