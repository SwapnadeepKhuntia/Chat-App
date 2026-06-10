import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const generateToken = (user,res) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
 console.log(token);
 
// Set token in cookie
  res.cookie("jwt", token, {
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    httpOnly: true,
    sameSite: "lax",
    // sameSite: "strict",
    // secure: process.env.NODE_ENV === "development" ? false : true, // Set secure flag in production 
  });

  
  

  return token;
}   



