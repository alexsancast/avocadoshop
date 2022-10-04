import { validInput } from "./validInput_price.js";


//variables
// const textN = new price();
const username = document.getElementById("email");
const passwords = document.getElementById("password");

/* Botones para los eventos*/
const btnLogin = document.getElementById("login__btn");

//Variables para validad la entrada del localstorage
let fullN = "";
let mail = "";
let pass = "";
let passC = "";
const user = [];

//Instanciar la clase
const checkInput = new validInput();
//capturamos los datos del HTML

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  login();
});

function login() {
  let usernameValue = username.value.trim();
  let passwordsValue = passwords.value.trim();

  if (usernameValue == "") {
    checkInput.setErrorFor(username, "The username field is required");
    return false;
  } else if (!checkInput.setErrorForEmail(usernameValue)) {
    checkInput.setErrorFor(username, "The email is not valid");
    return false;
  } else {
    mail = true;
  }

  if (passwordsValue == "") {
    checkInput.setErrorFor(passwords, "The password field is required");
    return false;
  } else if (passwordsValue.length < 9) {
    checkInput.setErrorFor(
      passwords,
      "The password must have at least 8 characters"
    );
    return false;
  } else {
    pass = true;
  }

  //----Valida correo y pass si existen en la base de datos
  if (mail === true && pass === true) {
    let us;
    us = JSON.parse(localStorage.getItem("user"));
    const value = us.some((element) => element.emailValue === usernameValue);
    if (value) {
      let isLog = us.some(
        (element) =>
          element.emailValue === usernameValue &&
          element.passwordrValue === passwordsValue
      );
      if (isLog) {
        let session = us.find((element) => element.emailValue == usernameValue);
        sessionStorage.setItem("session", JSON.stringify(session));
        window.location.href = "/public/home.html";
      } else {
        checkInput.setErrorFor(
          username,
          "username and passwords are incorrect"
        );
      }
    } else {
      checkInput.setErrorFor(
        username,
        "The email do not exist , please register "
      );
    }
  }
}
