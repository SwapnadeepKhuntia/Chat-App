import express from "express";
import path from "path";
import dotenv from "dotenv";
import authRouter from "./routes/auth.router.js";
import messageRouter from "./routes/message.router.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;


const __dirname = path.resolve();





app.use("/api/auth",authRouter);
app.use("/api/messages",messageRouter);


// make ready for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist"))); 

  app.get("/*path", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  } 
); 
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});