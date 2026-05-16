let display = document.querySelector("#output-display");
let copyBtn = document.querySelector("#copy-btn");

let upperCase = document.querySelector("#upperCase");
let lowerCase = document.querySelector("#lowerCase");
let number = document.querySelector("#number");
let symbol = document.querySelector("#symbol");
let generatepass = document.querySelector("#generate-Pass");

let passwordLength = document.querySelector("#passwordLength");

console.log(
  display,
  copyBtn,
  upperCase,
  lowerCase,
  number,
  symbol,
  passwordLength,
  generatepass,
);

generatepass.addEventListener("click", function () {
  console.log("Button clicked");
  let pool = "";
  if (upperCase.checked) {
    pool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowerCase.checked) {
    pool += "abcdefghijklmnopqrstuvwxyz";
  }
  if (number.checked) {
    pool += "0123456789";
  }
  if (symbol.checked) {
    pool += "@#$*&";
  }

  console.log(pool);

  if (pool === "") {
    alert("Select at least one option");
    return;
  }

  let password = "";

  for (let i = 0; i < passwordLength.value; i++) {
    let randomnumber = Math.floor(Math.random() * pool.length);

    console.log(randomnumber);
    let pickedPassword = pool[randomnumber];

    console.log(pickedPassword);

    password += pickedPassword;

    console.log(password);
  }
  display.value = password;
});

copyBtn.addEventListener("click", function () {
  if(display.value === ""){
    alert("Please Generate Password")
  } else{
     navigator.clipboard.writeText(display.value);
     alert("Password Copyied");
  }
})
