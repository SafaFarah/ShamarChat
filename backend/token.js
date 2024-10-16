import jwt from "jsonwebtoken";
import User from "./models/user.js";

export const create_token = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.SECRTKEY, {
        expiresIn: '7d'
    });
    res.cookie('jwt', token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 604800000,
        secure: process.env.NODE_ENV !== 'production',
    });
};


export const verify_token = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized: no token' });
        }
        const decoded = jwt.verify(token, process.env.SECRTKEY);
        if (!decoded) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        req.user = user;
        next();
        
    } catch (error) {
        console.error("Error verifying token: ", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
};