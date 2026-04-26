import express from "express";
import { login, logout, register} from "../controllers/auth.controller.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";
// import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

// router.get("/test", arcjetProtection , (req, res) => {
//     res.status(200).json({ message: "Auth route is working!" });
// });

// all route add first
router.use(arcjetProtection)

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// add update profile route here
// router.put("/update-profile", verifyToken,updateProfile);


//check verifyToken work or not
// router.get("/check",verifyToken,(req,res)=>res.status(200).json(req.user))

export default router;