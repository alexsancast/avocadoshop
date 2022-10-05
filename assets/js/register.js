import { validInput , price } from "./validInput_price.js";


const name = document.getElementById("name");
const lastname = document.getElementById("lastname");
const email = document.getElementById("emailr");
const passwordr = document.getElementById("passwordr");
const passwordc = document.getElementById("passwordc");

const textN = new price();

const checkInput = new validInput();

//Boton
const btnRegister = document.getElementById("register__btn");

//Variables
let nameR = "";
let lname = "";
let mail = "";
let pass = "";
let passC = "";
const user = [];

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();

  register();
});

//Funciones
function register() {
  let nameValue = name.value.trim();
  let lnameValue = lastname.value.trim();
  let emailValue = email.value.trim();
  let passwordrValue = passwordr.value.trim();
  let passwordcValue = passwordc.value.trim();

  //Validar nombre
  if (nameValue == "") {
    checkInput.setErrorFor(name, "The Name  field is required");
    return false;
  } else if (nameValue.length < 2) {
    checkInput.setErrorFor(
      name,
      "The full name must have at least 2 characters"
    );
    return false;
  } else {
    nameR = true;
  }

  //Validar Apellido

  if (lnameValue == "") {
    checkInput.setErrorFor(name, "The Last Name  field is required");
    return false;
  } else if (lnameValue.length < 2) {
    checkInput.setErrorFor(
      name,
      "The Last Name must have at least 2 characters"
    );
    return false;
  } else {
    lname = true;
  }

  //Validar correo

  if (emailValue == "") {
    checkInput.setErrorFor(email, "The email  field is required");
    return false;
  } else if (!checkInput.setErrorForEmail(emailValue)) {
    checkInput.setErrorFor(email, "The email is not valid");
    return false;
  } else {
    mail = true;
  }

  //Validar contrasena

  if (passwordrValue == "") {
    checkInput.setErrorFor(passwordr, "The password  field is required");
    return false;
  } else if (passwordrValue.length < 9) {
    checkInput.setErrorFor(
      passwordr,
      "The password must have at least 8 characters"
    );
    return false;
  } else {
    pass = true;
  }

  //Confirmar password

  if (passwordcValue == "") {
    checkInput.setErrorFor(passwordc, "The password confirm field is required");
    return false;
  } else if (passwordcValue.length < 9) {
    checkInput.setErrorFor(
      passwordc,
      "The password must have at least 8 characters"
    );
    return false;
  } else if (passwordrValue !== passwordcValue) {
    checkInput.setErrorFor(passwordr, "Passwords have to be the same");
    checkInput.setErrorFor(passwordc, "Passwords have to be the same");
    return false;
  } else {
    passC = true;
  }

  ///////---Validar el correo si existe en la base de datos---////
  if (nameR === true && lname === true && mail === true && pass === true && passC === true) {
    let test;
   
  
    if (localStorage.getItem("user") !== null) {
      test = JSON.parse(localStorage.getItem("user"));
      const value = test.some((item) => item.emailValue === emailValue);
      if (value) {
        checkInput.setErrorFor(email, "The email already exist");
      } else {
        test.push({ nameValue, lnameValue, emailValue, passwordrValue });
        localStorage.setItem("user", JSON.stringify(test));
        //*********//
        btnRegister.classList.add("container__btn_loading");
        btnRegister.innerHTML = "";
        setTimeout(() => {
          btnRegister.classList.remove("container__btn_loading");
          btnRegister.innerHTML = "Register";
          textN.setAddNotification("Registered User ");
          name.value = "";
          lastname.value = "";
          email.value = "";
          passwordr.value = "";
          passwordc.value = "";
          window.location.href = "/index.html";
        }, 2000);

      }
    } else {
      user.push({ nameValue, lnameValue, emailValue, passwordrValue });
      localStorage.setItem("user", JSON.stringify(user));
      //***// */
      btnRegister.classList.add("container__btn_loading");
      btnRegister.innerHTML = "";
      setTimeout(() => {
        btnRegister.classList.remove("container__btn_loading");
        btnRegister.innerHTML = "Register";
        textN.setAddNotification("Registered User ");
        name.value = "";
        lastname.value = ""
        email.value = "";
        passwordr.value = "";
        passwordc.value = "";
        window.location.href = "/index.html";
      }, 2000);
    }
  }
}
