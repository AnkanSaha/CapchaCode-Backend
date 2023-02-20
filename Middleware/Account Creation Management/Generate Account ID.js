/* This File for Gemerating Account ID */
// generating single digit number
function GenarateAccountID(){
    let AllNumbers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V' ,'W', 'X', 'Y', 'Z', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '$', '#', '@', '!', '%', '^', '*', '&', '>', '<', '?', '/', '=', '+', '-']; // all numbers
    var TempNumber = Math.floor(Math.random() * (51 - 1 + 1) + 1); // generating random number
    let generatingAccountID = AllNumbers[TempNumber]; // getting the number from array
    return generatingAccountID;
}

// adding multiple digit number
function GenerateID(){
    var Length = 20; // length of the account id
    var TempID = []; // creating array
    while(Length > 0){
        var AccountID = GenarateAccountID(); // calling the function
        TempID.push(AccountID); // pushing the value to array
        Length--; // decrementing the length
    } // while loop end
   var StringID = TempID.toString(); // converting array to string
   var FinalID = StringID.replace(/,/g, ''); // removing all commas
    return FinalID;
}

// exporting the module
export default GenerateID; // exporting the module