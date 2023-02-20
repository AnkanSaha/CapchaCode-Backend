// function middleware for verifying allowed urls

// importing all modules
import dotenv from "dotenv"; // importing dotenv
dotenv.config(); // importing environment variables
import ClientAllowedURLSManagementModel from "../../Database/Mongodb/model/Client Allowed URLS Management Model.js"; // importing model

async function verifyAllowedURLS(req, res, next) {
  try{ // try to get allowed urls
    let Allowed_URL = await ClientAllowedURLSManagementModel.find({
      Status: true
    }).select("Hostname"); // getting all allowed urls
      // getting hostname from request
  let Hostname = req.headers.host; // getting hostname from request
  // checking if hostname is allowed or not using for loop
  for (let i = 0; i < Allowed_URL.length; i++) {
    // if hostname is allowed then go to next middleware
    if (Allowed_URL[i].Hostname == Hostname) {
      next();
      break;
    } // if hostname is not allowed then return 403 status code
    else if (i == Allowed_URL.length - 1) {
      res.status(403).json({
        status: 403,
        message: "Not Allowed URL",
        refference: "please register your hostname in our database via capchacode.in",
      });
    } // if hostname is not allowed then return 403 status code
  }
  }
  catch(err){ // failed to get allowed urls
    console.log(err);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      refference: "please contact to our support team",
    });
  } // end of catch block
}

export default verifyAllowedURLS; // exporting middleware
