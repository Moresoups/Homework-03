function generatePassword() {
  var generateBtn = document.querySelector("#generate");
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var Uletters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specialCharacters= ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var possibleCharacters = [];
    
numberOfCharacters = prompt("how long would you like your password (write a number between 8-128)");
if (numberOfCharacters < 8 || numberOfCharacters > 128) {
  return "the password can not be that long";
} else if (isNaN(numberOfCharacters)) {
  numberOfCharacters = prompt("not a number, reload to try again");
}
  else {
    alert("confirmed");

}

hasletters = confirm("Do you want letters in your password");
if (hasletters) {
  alert("confirmed");
}
  else {
    alert("confirmed, no letters");
  }
  
  hasUletters = confirm("Do you want uppercase letters in your password");
  if (hasletters) {
    alert("confirmed");
  }
    else {
      alert("confirmed, no uppercase letters");
    }  

hasNumbers = confirm("Do you want to use numbers?");
if (hasNumbers) {
  alert("confirmed");
}
  else {
    alert("confirmed, no numbers");
  }
  
    
hasSpecial = confirm("Do you want special characters in your password?");  
if (hasSpecial) {
  alert("confirmed");
}
else {
  alert("confirmed, no special letters")
}

if (hasletters === false && hasNumbers === false && hasNumbers === false) {
  return "error, no selection";
};

if (hasNumbers) {
  possibleCharacters = possibleCharacters.concat(numbers);
}
if (hasletters) {
  possibleCharacters = possibleCharacters.concat(letters);
}
if (hasUletters) {
  possibleCharacters = possibleCharacters.concat(Uletters);
}
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

   // Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);