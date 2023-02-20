/* Author: Ankan Saha, Date: 04/02/2023 */

// Importing all essential modules
import { Schema } from "mongoose"; // importing Schema

const ClientAccountInfoSchema = new Schema({
  Name: { type: String, default: "Anonymous User", required: true },
  Email: { type: String, default: "No Email Provided", required: true },
  PhoneNumber: { type: Number, required: true },
  Password: { type: String, default: "No Password Set", required: true },
  SecretCode :{ type: String, default: "No Secret Code Set", required: true },
  Birthday: { type: String, required: true },
  Address: { type: String, default: "No Address Provided", required: true },
  City: { type: String, default: "No City Provided", required: true },
  State: { type: String, default: "No State Provided", required: true },
  Pincode: { type: Number, required: true },
  isTermsConditionAgreed: { type: Boolean, required: true },
  AccountID: { type: String, required: true },
  AccountCreatedAt: { type: Date, default: Date.now, required: true },
  isAccountActive: { type: Boolean, default: false, required: true },
  AccountStatus: { type: String, default: "Pending Approval", required: true },
  Wallet: {
    isPaid: { type: Boolean, default: false, required: true }, // isPaid
    LastPaymentDetails: {
      LastPaymentDate: { type: Date },
      LastPaymentAmmount: { type: Number, default: 0 },
      LastPaymentTransactionID: {type: String, default: "Currently No TransactionID Available"},
      PaymentMethod: { type: String, default: "No Payment Method Available" },
    }, // LastPaymentDetails
    isUnlimitedPlan: { type: Boolean, default: false, required: true },
    Balance: {
      TotalBalance: { type: Number, default: 0, required: true },
      TotalCaptchaServed: { type: Number, default: 0, required: true }
    }
  },
  Security :{
    Question1: { type: String, required: true },
    Answer1: { type: String, required: true },
    Question2: { type: String, required: true },
    Answer2: { type: String, required: true }
  }
});

export default ClientAccountInfoSchema;