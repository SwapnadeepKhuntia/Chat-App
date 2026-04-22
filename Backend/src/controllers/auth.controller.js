import User from "../modules/user.models.js";
import { generateToken } from "../utils/auth.utils.js";

export const register = async(req, res) => {
  try {
    const { fullname, email, password } = req.body;
       if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

   // Create new user

    const newUser = new User({ fullname, email, password });
    if(newUser){
      await newUser.save();
      generateToken(newUser._id,res);
      res.status(201).json({
        id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
        profilePicture: newUser.profilePicture,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    } 

  } catch (error) {
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
}