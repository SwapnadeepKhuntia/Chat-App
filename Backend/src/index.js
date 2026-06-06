import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/auth.router.js";
import messageRouter from "./routes/message.router.js";
import cookieParser from "cookie-parser";
import connectDB from "./database/db.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;


const __dirname = path.resolve();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

app.use(express.json()); 

app.use(cookieParser());

app.use("/api/auth",authRouter);
app.use("/api/message",messageRouter);


// make ready for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist"))); 

  app.get("/*path", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  } 
); 
}


app.listen(port, () => {
 
  console.log(`Server is running on port ${port}`);
   connectDB();
});