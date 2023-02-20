"use strict"
// import all essential modules
import {ClientAccountModel} from '../../Database/Mongodb/model/Client Account Model.js' // importing client account model
import {BcryptPasswordHasher} from '../../Middleware/Middleware control.js' // importing middleware

export async function ClientForgetPassword(Email, PhoneNumber, res){
    const email = Email.toLowerCase(); // converting email to lowercase

    // checking if email is valid
    if(email == "" || email == undefined || email == null || !email.includes('@') || !email.includes('.')){
        res.status(400).json({message: "Email is not valid"}); // sending response
        return; // returning from the function
    }
    else if(PhoneNumber.length != 10){
        res.status(400).json({message: "Phone Number is not valid"}); // sending response
        return; // returning from the function
    }
    else if(email != "" && email != undefined && email != null && PhoneNumber != "" && PhoneNumber != undefined && PhoneNumber != null || PhoneNumber.length == 10){
        try{
            let Result = await ClientAccountModel.find({$and: [{Email: email}, {PhoneNumber: PhoneNumber}]}); // finding the account
            
            // checking if account is found
            Result.length ==0? res.status(404).json({message: "Account not found"}) : res.status(200).json({Question1:Result[0].Security.Question1, Answer1:Result[0].Security.Answer1, Question2:Result[0].Security.Question2, Answer2:Result[0].Security.Answer2, AccountID:Result[0].AccountID, Name:Result[0].Name, SecretCode:Result[0].SecretCode}); // sending response
        }
        catch(err){
            res.status(500).json({message: "Internal Server Error"}) // sending response
            return; // returning from the function
        };
    };
};



// updating the password for the account with the given account id in forgot password section
export async function UpdateClientPasswordForforgetPassword(AccountID, NewPassword, SecretCode, res){
    let hashedPassword = await BcryptPasswordHasher(NewPassword); // hashing the password
    try{
        let UpdateResponse = await ClientAccountModel.updateOne({AccountID: AccountID}, {$set: {Password: hashedPassword, SecretCode: SecretCode}}); // updating the password
       UpdateResponse.modifiedCount != 1? res.status(500).json({Title:"Account Not Found" ,Description: "Sorry, but you don't have any account in our database, please create a new account"}) : res.status(200).json({Title:"Password & Secret Code updated", Description:"congratulations, your password & secret code has updated successfully. you can now login with those credentials"}); // sending response
    }
    catch(err){
        res.status(500).json({message: "Internal Server Error"}) // sending response
        return; // returning from the function
    }
}