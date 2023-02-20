"use strict"
import bodyparser from "body-parser"; // importing body parser setup

// importing all middleware
import { AccountDataValidator } from "../../../../../Middleware/Middleware control.js"; // importing account creation data validator
import ClientAccountCreator from "../../../../../Client/Authentication/Create Account.js"; // importing client account creator
import ClientAccountlogin from "../../../../../Client/Authentication/Login.js"; // importing client account login
import {ClientForgetPassword, UpdateClientPasswordForforgetPassword} from "../../../../../Client/Authentication/Forgot Password.js"; // importing client forget password

// server setup configuration
import { Router } from "express"; // importing router from express
const AuthRequestManager = Router(); // creating a router
import cors from "cors"; // importing cors module

// using cors middleware
AuthRequestManager.use(cors({
  origin: "*"
}));


// handling post request
// client creating account route
AuthRequestManager.post( "/CreateCustomerAccount", bodyparser.json(), AccountDataValidator, async (req, res) => {
    const {Name, Password, SecretCode, Email, PhoneNumber, Birthday, Address, City, State, Pincode, isTermsConditionAgreed, Question1, Answer1, Question2, Answer2} = req.body; // destructuring the request body
    ClientAccountCreator(
      Name, Password, SecretCode, Email, PhoneNumber, Birthday, Address, City, State, Pincode, isTermsConditionAgreed, Question1, Answer1, Question2, Answer2, res); // creating the account
  }
);



// client login route
AuthRequestManager.post('/ClientLogin', bodyparser.json(), (req, res)=>{
  const {Email, Password, SecretCode} = req.body; // destructuring the request body
  ClientAccountlogin(Email, Password, SecretCode, res) // logging in the account
});



// user Forgot Password
AuthRequestManager.post('/ForgotPassword', bodyparser.json(), (req, res)=>{
  const {Email, PhoneNumber} = req.body; // destructuring the request body
  ClientForgetPassword(Email, PhoneNumber, res)
});



AuthRequestManager.post('/UpdatePasswordandSecretCode', bodyparser.json(), (req, res)=>{
  const {AccountID, NewPassword, SecretCode} = req.body; // destructuring the request body
  UpdateClientPasswordForforgetPassword(AccountID, NewPassword, SecretCode, res)
});


// exporting all the routes
export default AuthRequestManager; // exporting all the routes
