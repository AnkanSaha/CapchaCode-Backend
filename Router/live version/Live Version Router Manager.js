// importing all major modules
import { Router } from "express";
const LiveRequestLinker = Router();
import cors from "cors"; // for cross origin request

LiveRequestLinker.use(cors({
    origin: "*"
})); // using cors

// importing all sub routes
import GetRouter from "./routes/GET/GET request Manager.js";
import PostRouter from './routes/POST/Post Request Manager.js';

// Linking all the routes
LiveRequestLinker.use("/get", GetRouter);
LiveRequestLinker.use("/post", PostRouter);


// exporting all the routes
export default LiveRequestLinker;
