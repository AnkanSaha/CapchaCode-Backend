/* Account Create Data validator */

function AccountDataValidator(req, res , next) {
  const {Name,
    Password,
    Email,
    PhoneNumber,
    Birthday,
    Address,
    City,
    State,
    Pincode,
    isTermsConditionAgreed} = req.body;
  // validator for name
  if (Name == undefined || Name == null || Name == "") {
    res.status(409).json({
      status: 409,
      message: "Name is required",
    });
  } // validator for password
  else if (
    Password == "" ||
    Password == undefined ||
    Password == null ||
    Password.length < 9
  ) {
    res.status(409).json( {
      status: 409,
      message: "Password Style is not correct",
    });
  } // validator for email
  else if (Email == "" || Email == undefined || Email == null) {
    res.status(409).json( {
      status: 409,
      message: "Email is required",
    });
  } // validator for phone number
  else if (
    PhoneNumber == "" ||
    PhoneNumber == undefined ||
    PhoneNumber == null || 
    PhoneNumber.length < 10
  ) {
    res.status(409).json( {
      status: 409,
      message: "Phone Number Style is not correct",
    });
  } // validator for birthday
  else if (Birthday == "" || Birthday == undefined || Birthday == null) {
    res.status(409).json( {
      status: 409,
      message: "Birthday is required",
    });
  } // validator for address
  else if (Address == "" || Address == undefined || Address == null) {
    res.status(409).json( {
      status: 409,
      message: "Address is required",
    });
  } // validator for city
  else if (City == "" || City == undefined || City == null) {
    res.status(409).json( {
      status: 409,
      message: "City is required",
    });
  } // validator for state
  else if (State == "" || State == undefined || State == null) {
    res.status(409).json( {
      status: 409,
      message: "State is required",
    });
  } // validator for pincode
  else if (
    Pincode == "" ||
    Pincode == undefined ||
    Pincode == null ||
    Pincode.length < 6
  ) {
    res.status(409).json( {
      status: 409,
      message: "Pincode style is not correct",
    });
  } // validator for terms and condition
  else if (
    isTermsConditionAgreed == "" ||
    isTermsConditionAgreed == undefined ||
    isTermsConditionAgreed == null ||
    isTermsConditionAgreed == false
  ) {
    res.status(409).json( {
      status: 409,
      message: "Terms and condition is required",
    });
  }
  else{
    next()
  }
}

export default AccountDataValidator;
