/* This file for client login feature. */
// Path: Client\Authentication\Auth\Login.js
import {ClientAccountModel} from '../../Database/Mongodb/model/Client Account Model.js' // importing client account model
import {BcryptPasswordCompare} from '../../Middleware/Middleware control.js' // importing bcrypt password hasher

async function ClientAccountlogin(Email, password, SecretCode, res){
    let email = Email.toLowerCase() // converting email to lowercase
    let AccountData = await ClientAccountModel.find({Email: email}) // finding the account
    if(AccountData.length == 0){
        res.status(400).json({Status: 'Account Not Found'}) // sending the response
    }else if(AccountData.length != 0){
        var MatchResult = await BcryptPasswordCompare(password, AccountData[0].Password) // comparing the password
        if(MatchResult == true){
            if(SecretCode == AccountData[0].SecretCode){
                res.status(200).json({Status: 'Login Successfull', AccountID:AccountData[0].AccountID, SecretCode:AccountData[0].SecretCode, Name:AccountData[0].Name}) // sending the response
            }else if(SecretCode != AccountData[0].SecretCode){
                res.status(400).json({Status: 'Secret Code Incorrect'}) // sending the response
            }
        }
        else if(MatchResult == false){
            res.status(400).json({Status: 'Password Incorrect'}) // sending the response
        }
    }

}

// exporting all the functions
export default ClientAccountlogin; // exporting all the functions