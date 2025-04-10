import express from "express";
import { fetchUsers, fetchUserById, addUser } from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", fetchUsers);
router.get("/users/:id", fetchUserById);
router.post("/users", addUser);

export default router;



/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get("/users", fetchUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: A user object
 */
router.get("/users/:id", fetchUserById);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 */
router.post("/users", addUser);
