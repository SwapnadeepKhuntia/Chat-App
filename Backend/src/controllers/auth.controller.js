import { sendwelcomeEmail } from "../emails/emailHandaler.js";
import User from "../modules/user.module.js";
import { generateToken } from "../utils/auth.utils.js";
import "dotenv/config";

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

      // //send welcome email
      // try {
      //   await sendwelcomeEmail(newUser.email, newUser.fullname, process.env.CLIENT_URL);
      // } catch (error) {
      //   console.error("Error sending welcome email:", error);
      // }


      
    } else {
      res.status(400).json({ message: "Invalid user data" });
    } 

  } catch (error) {
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
}

export const login = async(req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });

    if (user && user.password === password) {
      generateToken(user._id,res);  
      res.json({
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        profilePicture: user.profilePicture,
      });
    }
    else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } 
  catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
}

export const logout = async(req, res) => {
  try { 
   res.cookie("jwt", "", {
    maxAge: 0,
    httpOnly: true,
    sameSite: "lax",
  });
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error logging out", error: error.message });
  }
}

export const updateProfilePicture = async(req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const userId = req.user.id;
    const profilePictureUrl = `${process.env.SERVER_URL}/uploads/${req.file.filename}`;
    const user =  await User.findByIdAndUpdate(userId, { profilePicture: profilePictureUrl }, { new: true });
    if (user) {
      res.json({
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        profilePicture: user.profilePicture,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating profile picture", error: error.message });
  }
}


