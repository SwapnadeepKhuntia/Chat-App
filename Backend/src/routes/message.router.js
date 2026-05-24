import express from "express";
import { getAllContacts, getchatPartners, getMessagebyuserId, sendMessage} from "../controllers/message.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();


router.get("/contacts",verifyToken,getAllContacts);
router.get("/chats",verifyToken,getchatPartners);

router.get("/:id",verifyToken,getMessagebyuserId);

router.post("/send/:id",verifyToken,sendMessage);






//check verifyToken work or not
//router.get("/check",verifyToken,(req,res)=>res.status(200).json(req.user))

export default router;