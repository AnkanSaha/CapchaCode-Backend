import { Router } from "express"; // Import Router from express
import cors from 'cors'; // Import cors from cors
const GetWorker = Router(); // Create a new Router
/* Author : @Ankan Saha*/

// using cors
GetWorker.use(cors({
  origin: '*', // allow to server to accept request from different origin
}));

// Handle GET request

GetWorker.get("/", (req, res) => {
  res.send("Hello World!");
});

// Export the router
export default GetWorker;
