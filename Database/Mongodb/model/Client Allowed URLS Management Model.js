// moldels for the client allowed urls management
// import all modules
import ClientAllowedURLSManagementSchema from "../schema/Client Allowed URLS Management Schema.js"; // importing schema

import { model } from 'mongoose' // importing model from mongoose

// defining model
const ClientAllowedURLSManagementModel = model('ClientAllowedURLSManagement', ClientAllowedURLSManagementSchema); // defining model

// exporting model
export default ClientAllowedURLSManagementModel; // exporting model