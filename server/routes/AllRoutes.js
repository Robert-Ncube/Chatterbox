import express from "express";
import authRoutes from "./authRoutes.js";
import messagesRoutes from "./messagesRoutes.js";
import usersRoutes from "./usersRoutes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/messages", messagesRoutes);
router.use("/users", usersRoutes);

export default router;
