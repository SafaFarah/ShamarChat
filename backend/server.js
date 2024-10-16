import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import connectToMangodb from "./mongoDb.js"

const app = express();
dotenv.config();
const Port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("hello");
});

app.use("/user", userRoute);


app.listen(Port, () => {
    connectToMangodb();
    console.log(`Server running on port ${Port}`);
});