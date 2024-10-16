import express, { json } from "express";
import bcrypt from "bcryptjs";
import create_token from "../token.js";
import User from "../models/user.js";

const router = express.Router();

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

router.post("/login", (req, res) => {
    res.send("user login");
});


router.post("/logout", (req, res) => {
    res.send("user logout");
});

export default router;