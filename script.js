function generatePassword() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];var generateBtn = document.querySelector("#generate");
    var specialCharacters= ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    numberOfCharacters = prompt("how long would you like your password (write a number between 3-100)");
    if (numberOfCharacters < 3 || numberOfCharacters > 100) {
      return "the password can not be that long";
    } else if (isNaN(numberOfCharacters)) {
      numberOfCharacters = prompt("");
    }
    
    hasletters = confirm("do you want letters in your password?");
    if (hasletters) {
      possibleCharacters = possibleCharacters.concat(letters);
    }
    
    hasNumbers = confirm("Do you want numbers in your password?");
    if (hasNumbers) {
      possibleCharacters = possibleCharacters.concat(numbers);
    }
    
    hasSpecial = confirm("Do you want special characters in your password?");  
    if (hasSpecial) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
    }
  
    let finalPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let rng =[Math.floor(Math.random() * possibleCharacters.length)];
    finalPassword = finalPassword + possibleCharacters[rng];
  }
  return finalPassword;
};
 
var generateBtn = document.querySelector("#generate");


    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
    
    }
    
    generateBtn.addEventListener("click", writePassword);