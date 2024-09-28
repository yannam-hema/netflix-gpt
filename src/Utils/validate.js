const checkValidation = (email, password, name) => {
    const isValidEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    
    // Only check the name field if it exists (i.e., during Sign Up)
    if (name !== null) {
      const isValidName = /^[A-Za-z\s]+$/.test(name);
      if (!isValidName) {
        return "Your Name Should Contain Only Letters";
      }
    }
  
    if (!isValidEmail) {
      return "Enter Valid Email Address";
    }
    if (!isValidPassword) {
      return "Enter Valid Password (Minimum 8 characters, at least one letter, one number, and one special character)";
    }
    return null;
  };
  
  export default checkValidation;
  