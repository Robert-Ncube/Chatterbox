import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  sendMessage,
  getMessages,
  deleteMessage,
} from "../controllers/messagesController.js";

const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessages);
router.delete("/:id", protectRoute, deleteMessage);

export default router;
