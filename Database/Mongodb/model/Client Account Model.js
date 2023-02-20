/* Author: Ankan Saha, Date: 04/02/2023 */

// Importing all essential modules
import { model } from "mongoose";
// importing Schema
import ClientAccountInfoSchema from "../schema/Client Account Schema.js"; // importing schema

export const ClientAccountModel = model("AccountInfo", ClientAccountInfoSchema); // exporting model