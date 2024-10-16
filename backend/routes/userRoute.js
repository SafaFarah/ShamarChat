import express from "express";

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const {username, email, password, confirmpassword, gender} = req.body;
    } catch (error) {
        
    }
});

router.post("/login", (req, res) => {
    res.send("user login");
});


router.post("/logout", (req, res) => {
    res.send("user logout");
});

export default router;