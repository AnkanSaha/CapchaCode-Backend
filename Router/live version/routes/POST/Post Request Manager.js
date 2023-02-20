import { Router } from "express"; // importing router from express
const PostRequestManagerLinker = Router(); // creating a router
import AuthRequestManager from './Auth Request Router/Auth Request Manager.js' // importing all sub routes
import cors from "cors"; // for cross origin request
PostRequestManagerLinker.use(cors({
    origin: "*"
})); // using cors

// lnking all sub routes
PostRequestManagerLinker.use('/auth', AuthRequestManager);

// exporting all the routes
export default PostRequestManagerLinker; // exporting all the routes