import express from "express";
import { getUsersForSideBar } from "../controllers/usersController.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = new express.Router();

router.get("/", protectRoute, getUsersForSideBar);

export default router;
