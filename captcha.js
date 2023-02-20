// importing all modules
import { config } from "dotenv"; // importing dotenv
config(); // importing environment variables
import express from "express"; // importing express
const service = express(); // creating express service
import { cpus } from "os"; // importing os module
import cluster from "cluster"; // importing cluster module
import cors from "cors"; // importing cors module
const PORT = process.env.CapchaCodeBackendPORT; // getting port from environment variables

// importing all middleware
import { MiddlewareMainWorker, MongoDatabaseConnection } from "./Middleware/Middleware control.js"; // importing middleware control file

// importing router control file
import RouterManager from "./Router/Manager.js"; // importing router manager

// creation cluster for multi core processing
let NumberofCores = cpus().length; // getting number of cores
if (cluster.isPrimary) {
  // checking if it is primary process
  while (NumberofCores > 0) {
    // creating worker
    cluster.fork();
    NumberofCores--;
  } // end of while loop
  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.id} died`);
    // creating new worker
    NumberofCores = cpus().length; // getting number of cores
    while (NumberofCores > 0) {
      // creating new worker
      cluster.fork();
      // decrementing number of cores
      NumberofCores--;
    } // end of while loop
  });
} else {
  // using All Middleware
  service.use(MiddlewareMainWorker); // using middleware for allowed urls
  service.use(RouterManager); // using router manager for routing
  service.use(cors({
    origin: "*"
  })); // using cors middleware

  // listening port & ativating service & connecting to database
  service.listen(PORT, async () => {
    console.log(`Captcha service Server API listening on port ${PORT}`);
     // using mongodb connection middleware
     await MongoDatabaseConnection(); // connecting to database
  });
}
