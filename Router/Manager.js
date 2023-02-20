// importing all major modules
import { Router } from "express";
const RequestLinker = Router();
import cors from "cors"; // importing cors module

RequestLinker.use(cors({
    origin: "*"
}));

// importing all sub routes (Live & Beta) version
import LiveVersionRouter from "./live version/Live Version Router Manager.js";
import BetaVersionRouter from "./beta version/Beta Version Router Manager.js";

// Linking all the routes
RequestLinker.use("/live", LiveVersionRouter);
RequestLinker.use("/beta", BetaVersionRouter);

// exporting all the routes
export default RequestLinker;
