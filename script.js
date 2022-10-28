// Assignment code here

//defining password characters
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialArr = ['!', '@', '#', '$', '*', '%'];

//Start of function
function generatePassword() {
 
  //Prompt
  var passwordLength = prompt("Choose password length (between 8 and 128)");
  passwordLength = Number(passwordLength);
  console.log(passwordLength);

  //Check if user input valid length
  if (passwordLength <8 || passwordLength >128) { 
    alert("Please choose a number between 8 and 128.");
  return "Error not allowed to have less than 8 or more than 128 characters!!";
  } 

  //confirm other characters for password
  var lowerCase = confirm("Would you like lowercase letters in your password?");
  var upperCase = confirm("Would you like upper case letters in your password?");
  var numbers = confirm("Would you like numbers in your password?");
  var special = confirm("Would you like special characters (!, @, #, $, *, %) in your password?");
  
  //Check boolean for confirm characters
  var wantedChars =[];
  
  if (lowerCase) {
    wantedChars = wantedChars.concat(lowerCaseArr);
  }
  
 
  if (upperCase) {
    wantedChars = wantedChars.concat(upperCaseArr);
  }

  
  if (numbers) {
    wantedChars = wantedChars.concat(numbersArr);
  }


  if (special) {
    wantedChars = wantedChars.concat(specialArr);
  }

  //If all variables are false, send back to prompts, ask user to refresh

  //Write password
 var finalPass = [];
 
 for(var i=0; i < passwordLength; i++) {
  randomIndex = Math.floor (Math.random() * wantedChars.length);
  finalPass = finalPass.concat(wantedChars[randomIndex]);
  console.log("loop")
 }
 console.log(finalPass)

  finalPass = finalPass.join("")
  return finalPass;
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
