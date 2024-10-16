import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import connectToMangodb from "./mongoDb.js"

const app = express();
const Port = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use("/user", userRoute);


app.listen(Port, () => {
    connectToMangodb();
    console.log(`Server running on port ${Port}`);
});