import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import connectToMangodb from "./mongoDb.js"

const app = express();
const Port = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use("/user", userRoute);
app.use("/message", messageRoute);


app.listen(Port, () => {
    connectToMangodb();
    console.log(`Server running on port ${Port}`);
});