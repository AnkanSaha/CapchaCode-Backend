// importing all major modules
import { Router } from "express";
export const MiddlewareMainWorker = Router(); // creating router
// import all sub Middleware
import AllowedURLS from "./Access Control/Allowed URLS.js"; // importing allowed urls middleware
import useMongoDatabaseConnection from "./Database Connection/MongoDB Connection.js"; // importing mongodb connection middleware
import DataValidate from './Account Creation Management/Account Create Data validator.js'
// bcrypt password hasher middleware
import { BcrypthashPassword, BcryptComparePassword} from "./Security/bcrypt Password Hasher.js";

// generating Account ID middleware
import GenarateAccountID from "./Account Creation Management/Generate Account ID.js";

// linking all sub Middleware
MiddlewareMainWorker.use(AllowedURLS); // using allowed urls middleware`

// binding all sub Middleware as variable
export const AccountDataValidator = DataValidate;
export const MongoDatabaseConnection = useMongoDatabaseConnection;
export const BcryptPasswordHasher = BcrypthashPassword;
export const GenerateAccountID = GenarateAccountID;
export const BcryptPasswordCompare = BcryptComparePassword;
