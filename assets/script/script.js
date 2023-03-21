// Assignment Code
var generateBtn = document.querySelector("#generate");

//Global Variables
var pLength = "";
var UpperCasePrompt = "";
var UpperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LowerCasePrompt = "";
var LowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
var numbersPrompt = "";
var NumbersSet = "0123456789";
var specialPrompt = "";
var SpecialSet = "\\!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var pwdchoices = "";


// Write password to the #password input
function writePassword() {
  passwordLength ();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Write password input conditions and requirements
function generatePassword() {
  var result = "";
  var pwdchoiceslength = pwdchoices.length
  for (var i = 0; i < pLength; i++) {
    result += pwdchoices.charAt(Math.floor(Math.random() * pwdchoiceslength));
  } 
  return result;

//  passwordLength ();
  // console.log(pLength);
  // upperCasechars();
  // console.log(UpperCasePrompt);
  
}



// Write function to store password length variable
function passwordLength () {  
  var minLength = 8;
  var maxLength = 128;
  pLength = window.prompt("\nPlease select a password length. \nIt should be between 8 and 128 characters");
  // Reload page if user clicks cancel on window prompt to restore "Your Secure Password" placeholder
  if(!pLength) {
    window.alert("❗ You have clicked on CANCEL or clicked OK without data input. The page will reload and the previously stored choices will be removed.");
    window.location.reload(); 
  } else if (pLength >= minLength && pLength <= maxLength) {
    upperCasechars();
  } else {
    window.alert("\n⚠️ Invalid number of characters ⚠️ \n\nPlease select a password length between 8 and 128 characters");
    passwordLength();
  }
}

// Write function to store UpperCase characters variable
function upperCasechars(){
  UpperCasePrompt = window.prompt("\nWould you like to include upper case characters in your password? \n\nYes / No");  
  // End function if user clicks cancel on window prompt to restore "Your Secure Password" placeholder
  if(!UpperCasePrompt) {
    window.alert("❗ You have clicked on CANCEL or clicked OK without data input. The page will reload and the previously stored choices will be removed.");
    window.location.reload(); 
  }
  // Change Answer to lowercase characters to avoid errors in logic
  UpperCasePrompt = UpperCasePrompt.toLowerCase();
  if (UpperCasePrompt === "yes") {  
    lowerCasechars();
  } else if (UpperCasePrompt === "no") {
    lowerCasechars();
  } else if (UpperCasePrompt !== "") { 
    window.alert("\n⚠️ Invalid answer ⚠️  \n\nPlease type yes or no to indicate whether you want to include upper caase characters in the password.");
    upperCasechars();
  }
}

// Write function to store LowerCase characters variable
function lowerCasechars(){ 
  LowerCasePrompt = window.prompt("\nWould you like to include lower case characters in your password? \n\nYes / No");
  // End function if user clicks cancel on window prompt to restore "Your Secure Password" placeholder
  if(!LowerCasePrompt) {
    window.alert("❗ You have clicked on CANCEL or clicked OK without data input. The page will reload and the previously stored choices will be removed.");
    window.location.reload(); 
  } 
  // Change Answer to lowercase characters to avoid errors in logic
  LowerCasePrompt = LowerCasePrompt.toLowerCase();
  if (LowerCasePrompt === "yes") {  
    numberchars();
  } else if (LowerCasePrompt === "no") {
    numberchars();
  } else if (LowerCasePrompt !== "") {
    window.alert("\n⚠️ Invalid answer ⚠️  \n\nPlease type yes or no to indicate whether you want to include lower caase characters in the password.");
    lowerCasechars();
  }
}

// Write function to store numbers variable
function numberchars(){ 
  numbersPrompt = window.prompt("\nWould you like to include numbers in your password? \n\nYes / No");
  // End function if user clicks cancel on window prompt to restore "Your Secure Password" placeholder
  if(!numbersPrompt) {
    window.alert("❗ You have clicked on CANCEL or clicked OK without data input. The page will reload and the previously stored choices will be removed.");
    window.location.reload(); 
  } 
  // Change Answer to lowercase characters to avoid errors in logic
  numbersPrompt = numbersPrompt.toLowerCase();
  if (numbersPrompt === "yes") {  
    specialchars();
  } else if (numbersPrompt === "no") {
    specialchars();
  } else if (numbersPrompt !== ""){
    window.alert("\n⚠️ Invalid answer ⚠️  \n\nPlease type yes or no to indicate whether you want to include numbers in the password.");
    numberchars();
  }
}

// Write function to store special characters variable
function specialchars(){ 
  specialPrompt = window.prompt("\nWould you like to include special characters in your password? \n\nYes / No");
  // End function if user clicks cancel on window prompt to restore "Your Secure Password" placeholder
  if(!specialPrompt) {
    window.alert("❗ You have clicked on CANCEL or clicked OK without data input. The page will reload and the previously stored choices will be removed.");
    window.location.reload(); 
  } 
  // Change Answer to lowercase characters to avoid errors in logic
  specialPrompt = specialPrompt.toLowerCase();
  if (specialPrompt === "yes") {  
    inputValidation();
  } else if (specialPrompt === "no") {
    inputValidation();
  } else if (specialPrompt !== "") {
    window.alert("\n⚠️ Invalid answer ⚠️  \n\nPlease type yes or no to indicate whether you want to include special characters in the password.");
    numberchars();
  }
}

// Write function to validate at least one character type was selected
function inputValidation () {
  if (UpperCasePrompt === "no" && LowerCasePrompt === "no" && numbersPrompt === "no" && specialPrompt === "no"){
    window.alert("\n⚠️ WARNING ⚠️  \n\nAt least one character type must be selected.\n The page will be reloaded");
    window.location.reload();
  } else {
    var dataInput = document.querySelector("#log");
    dataInput.value = "Here is the data that you have input to be considered for your password: \n\nPassword Length: " + pLength + "\nUpperCase characters selected: " + UpperCasePrompt + "\nLowerCase characters selected: " + LowerCasePrompt + "\nNumbers selected: " + numbersPrompt + "\nSpecial characters selected: " + specialPrompt;
    randomPwd();
  }
}

// Write function to generate password based on provided input
function randomPwd () {
  if (UpperCasePrompt === "yes" && LowerCasePrompt === "yes" && numbersPrompt === "yes" && specialPrompt === "yes") {
    pwdchoices = UpperCaseSet.concat(LowerCaseSet,NumbersSet,SpecialSet);
  } else if (UpperCasePrompt === "yes" && LowerCasePrompt === "yes" && numbersPrompt === "yes") {
    pwdchoices = UpperCaseSet.concat(LowerCaseSet,NumbersSet);
  } else if (UpperCasePrompt === "yes" && LowerCasePrompt === "yes" && specialPrompt === "yes") {
    pwdchoices = UpperCaseSet.concat(LowerCaseSet,SpecialSet);
  } else if (UpperCasePrompt === "yes" && numbersPrompt === "yes" && specialPrompt === "yes") {
    pwdchoices = UpperCaseSet.concat(NumbersSet,SpecialSet);
  } else if (UpperCasePrompt === "yes" && LowerCasePrompt === "yes") {
    pwdchoices = UpperCaseSet.concat(LowerCaseSet);
  } else if (UpperCasePrompt === "yes" && numbersPrompt === "yes") {
    pwdchoices = UpperCaseSet.concat(NumbersSet);
  } else if (UpperCasePrompt === "yes" && specialPrompt === "yes") {
    pwdchoices = UpperCaseSet.concat(SpecialSet);
  } else if (UpperCasePrompt === "yes") {
    pwdchoices = UpperCaseSet;
  } else if (LowerCasePrompt === "yes" && numbersPrompt === "yes" && specialPrompt === "yes") {
    pwdchoices = LowerCaseSet.concat(NumbersSet,SpecialSet);
  } else if (LowerCasePrompt === "yes" && numbersPrompt === "yes") {
    pwdchoices = LowerCaseSet.concat(NumbersSet);
  } else if (LowerCasePrompt === "yes" && specialPrompt === "yes") {
    pwdchoices = LowerCaseSet.concat(SpecialSet);
  } else if (LowerCasePrompt === "yes") {
    pwdchoices = LowerCaseSet;
  } else if (numbersPrompt === "yes" && specialPrompt === "yes") {
    pwdchoices = NumbersSet.concat(SpecialSet);
  } else if (numbersPrompt === "yes") {
    pwdchoices = NumbersSet;
  } else if (specialPrompt === "yes") {
    pwdchoices = SpecialSet;
  }

  console.log (pwdchoices);

  generatePassword();
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
