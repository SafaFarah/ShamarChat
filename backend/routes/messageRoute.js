import express from "express";
import Chat from "../models/chat.js";
import Message from "../models/message.js";
import { verify_token } from "../token.js"

const router = express.Router();

router.post("/send/:id", verify_token, async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let chat = await Chat.findOne({
           participate: { $all: [senderId, receiverId] },
        });

        if (!chat) {
            chat = await Chat.create({
            participate: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if(newMessage) {
            chat.messages.push(newMessage._id);
        }
        await chat.save();
        await newMessage.save();
        return res.status(201).json(newMessage);

    } catch (error) {
        console.error("Error sending message: ", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
});

export default router;