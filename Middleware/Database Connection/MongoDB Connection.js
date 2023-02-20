// importing all modules
import dotenv from "dotenv";
dotenv.config();
import mongoose, { connect, mongo } from "mongoose"; // importing mongoose

async function useMongoDatabaseConnection() {
  // connecting to database
  try{ // try to connect to database
    await connect(process.env.CaptchaCodeMongodbURL); // connecting to database
    console.log(`Captcha service Server API connected to database`);
  }
  catch(err){ // failed to connect to database
    console.log(`Captcha service Server API failed to connect to database`);
  }
  // database connection events
  mongoose.connection.on("disconnected", async () => {
    // if disconnected from database
    console.log("Captcha service Server API disconnected from database");
    // reconnecting to database
    try{ // try to reconnect to database
      await connect(process.env.CaptchaCodeMongodbURL); // reconnecting to database
      console.log("Captcha service Server API reconnected to database"); // reconnected to database
    }
    catch(err){ // failed to reconnect to database
      console.log("Captcha service Server API failed to reconnect to database"); // failed to reconnect to database
    }
  });
}

export default useMongoDatabaseConnection;
