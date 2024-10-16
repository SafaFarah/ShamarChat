import express from "express";
import bcrypt from "bcryptjs";
import { create_token } from "../token.js";
import { verify_token } from "../token.js";
import User from "../models/user.js";

export const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const {username, email, password, confirmpassword, gender} = req.body;
        if(password !== confirmpassword) {
            return res.status(400).json({ error: "Password don't match!" })
        }

        const user = await User.findOne({username});
        if(user) {
            return res.status(400).json({ error: "Username already exists" })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const defaultProfilePicture = "../images/default_profile.png";
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            gender,
            profilePicture: defaultProfilePicture,
            bio: "Tell us about yourself ...",
          });

        if(newUser) {
            create_token(newUser._id, res);
            await newUser.save();
            return res.status(201).json({
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                profilePicture: newUser.profilePicture,
                bio: newUser.bio,
              });
        } else {
            return res.status(400).json({ error: "invalid user's data" })
        }


    } catch (error) {
        console.error("Error during signup: ", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        const isMatch = await bcrypt.compare(password, user?.password || "");
        if (!user || !isMatch) {
            return res.status(400).json({ error: "Invalid username or password" });
        }
        create_token(user._id, res);
        return res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        gender: user.gender,
        profilePicture: user.profilePicture,
        bio: user.bio,
    });

  } catch (error) {
    console.error("Error during login: ", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});


router.post("/logout", (req, res) => {
    try {
      res.cookie("jwt", "", {maxAge:0});
      return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
      console.error("Error during logout:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

router.get("/", verify_token, async (req, res) => {
    try {
        const chatUserId = req.user._id;
        const users = await User.find({ _id: { $ne: chatUserId }}).select("-password");
        res.status(200).json(users);

    } catch (error) {
      console.error("Error in get users: ", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  });

export default router;