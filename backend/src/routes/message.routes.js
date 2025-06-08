import express from "express"
import generateResponse from "../controller/message.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/getResponse",authMiddleware, generateResponse);


export default router;