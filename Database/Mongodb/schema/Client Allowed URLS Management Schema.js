// Description: This file contains the schema for the Client Allowed URLS Management collection in the database.
// importing schema from mongoose
import { Schema } from "mongoose"; // importing schema from mongoose

// defining schema
const ClientAllowedURLSManagementSchema = new Schema({
  Hostname: {
    type: String,
    required: true,
  },
  AccountID: {
    type: String,
    required: true,
  },
  AddedDate: {
    type: Date,
    default: Date.now,
  },
  LastUpdatedDate: {
    type: Date,
    default: Date.now,
  },
  Status: {
    type: Boolean,
    default: true,
    required: true,
  },
  CurrentCapcha: {
    type: Array,
    default: [],
    required: true,
  },
  CaptchaType:{
    type: String,
    default: "None"
  }
});

// exporting schema
export default ClientAllowedURLSManagementSchema; // exporting schema
