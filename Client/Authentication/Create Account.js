// importing all essential modules
import { ClientAccountModel } from "../../Database/Mongodb/model/Client Account Model.js"; // importing client account model
import { BcryptPasswordHasher, GenerateAccountID } from "../../Middleware/Middleware control.js"; // Middleware for encrypt password with bcrypt

async function ClientAccountCreator(Name, Password, SecretCode, Email, PhoneNumber, Birthday, Address, City, State, Pincode, isTermsConditionAgreed,Question1, Answer1, Question2, Answer2, res) {
  // Making some changes to the data in lowercase and removing spaces
  let email = Email.toLowerCase(); // converting email to lowercase
  let UserSecurityAnswer1 = Answer1.toLowerCase(); // converting answer1 to lowercase
  let UserSecurityAnswer2 = Answer2.toLowerCase(); // converting answer2 to lowercase

  // checking if the account already exists
  let FindResult = await ClientAccountModel.find({$or: [{ Email: email }, { PhoneNumber: PhoneNumber }]}); // finding the account

  if (FindResult.length == 0) {
    let Hashed_Password_Through_Bcrypt = await BcryptPasswordHasher(Password); // hashing the password
    let Generated_AccountID = GenerateAccountID(); // generating account id
      // creating new account
      let PrepareData = { // preparing the data
        Name: Name,
        Email: email,
        PhoneNumber: PhoneNumber,
        Password: Hashed_Password_Through_Bcrypt,
        SecretCode:SecretCode,
        Birthday: Birthday,
        Address: Address,
        City: City,
        State: State,
        Pincode: Pincode,
        isTermsConditionAgreed: isTermsConditionAgreed,
        AccountID: Generated_AccountID,
        AccountCreatedAt: Date.now(),
        isAccountActive: false,
        AccountStatus: "Pending Approval",
        Wallet: {
          isPaid: false,
          LastPaymentDetails: {
            LastPaymentDate: Date.now(),
            LastPaymentAmmount: 0,
            LastPaymentTransactionID: "Currently No TransactionID Available",
            PaymentMethod: "No Payment Method Available",
          }, // LastPaymentDetails
          isUnlimitedPlan: false, // isUnlimitedPlan
          Balance: {
            TotalBalance: 0,
            TotalCaptchaServed: 0,
          }, // Balance
        },
        Security :{
          Question1: Question1,
          Answer1: UserSecurityAnswer1,
          Question2: Question2,
          Answer2: UserSecurityAnswer2
        }
      } // PrepareData
      
  let NewAccount = new ClientAccountModel(PrepareData); // creating new account
  var Status = await NewAccount.save(); // saving the account
  
  if (Status.length != 0) {
    res.status(200).json({
      Status: {
        Stat: "Account Created Successfully",
        Description : "Account Created Successfully Now You Can Login To Your Account. but currently your account is in pending approval state so you can't login to your account until your account is approved by admin"
      },
      AccountID: Generated_AccountID,
      SecretCode: SecretCode,
      Name: Name
    });
  } else if (Status == 0) {
    res.status(400).json({
      Status: {
        Stat: "Account Creation Failed",
        Description : "Account Creation Failed Due To Some Internal Error. Please Try Again Later"
      }
    });
  }
  } else if (FindResult.length != 0) {
    res.status(400).json({
      Status: {
        Stat: "Account Already Exists",
        Description : "Account Already Exists With This Email Or Phone Number. Please Try With Another Email Or Phone Number"
      }
    });
  }
}

// exporting the module
export default ClientAccountCreator; // exporting the module
