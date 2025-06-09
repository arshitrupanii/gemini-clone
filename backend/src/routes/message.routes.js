import express from "express"
import generateResponse from "../controller/message.controller.js"

const router = express.Router();

router.post("/getResponse", generateResponse);


export default router;