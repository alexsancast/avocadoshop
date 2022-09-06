import {validInput} from "./validInput_price.js";

//variables
const username = document.getElementById("email");
const passwords = document.getElementById("password");
const name = document.getElementById("name");
const email = document.getElementById ("emailr");
const passwordr = document.getElementById("passwordr");
const passwordc = document.getElementById("passwordc");
/* Botones para los eventos*/
const btnLogin = document.querySelector('.login__btn');
const btnRegister = document.querySelector('.register__btn');
//Instanciar la clase
const checkInput = new validInput();
//capturamos los datos del HTML


btnRegister.addEventListener('click', (e) => {

    e.preventDefault();


    register();

})

btnLogin.addEventListener('click', (e) => {

    e.preventDefault();


    login();

})





//Funciones 
function register () {

    let nameValue = name.value.trim();
    let emailValue = email.value.trim();
    let passwordrValue = passwordr.value.trim();
    let passwordcValue = passwordc.value.trim();
    
        //Validar nombre
    if (nameValue == "") {
        checkInput.setErrorFor(name, "The full name  field is required");
        return false;

    }

    else if (nameValue.length <6 ) {
        checkInput.setErrorFor(name, "The full name must have at least 6 characters");
        return false;

    }

     else {checkInput.setSuccessFor(name)}
    
       //Validar correo

       if (emailValue == ""){
            checkInput.setErrorFor(email ,"The email  field is required" )
            return false;
       }
        else if (!checkInput.setErrorForEmail(emailValue)) {
                 checkInput.setErrorFor(email, "The email is not valid")
                return false;
      }
     else {checkInput.setSuccessFor(email)}

       //Validar contrasena

     if (passwordrValue == "") {
        checkInput.setErrorFor(passwordr , "The password  field is required")
        return false
    }

    else if (passwordrValue.length < 9  ) {
        checkInput.setErrorFor(passwordr, "The password must have at least 8 characters");
        return false
    }
    
    else { checkInput.setSuccessFor(passwordr)}
    
    //Confirmar password

    if (passwordcValue == "") {
        checkInput.setErrorFor(passwordc , "The password  field is required")
    }
   
    else if (passwordcValue.length < 9  ) {
        checkInput.setErrorFor(passwordc, "The password must have at least 8 characters");
    }

    else if ( passwordrValue !== passwordcValue) {
        checkInput.setErrorFor(passwordr, "Passwords have to be the same");
        checkInput.setErrorFor(passwordc, "Passwords have to be the same");
    }
    else { 
        checkInput.setSuccessFor(passwordc)
        checkInput.setSuccessFor(passwordr)
    
    }
    }
        



function login () {
    
     let usernameValue = username.value.trim();
     let passwordsValue = passwords.value.trim();
     
    if (usernameValue == "") {

            checkInput.setErrorFor(username, "The username field is required");
            return false;

        }

        else if (! checkInput.setErrorForEmail(usernameValue)) {
            checkInput.setErrorFor(username, "The email is not valid")
            return false;
       }

       else  { checkInput.setSuccessFor(username)}

         if (passwordsValue == "") {
            checkInput.setErrorFor(passwords, "The password field is required");
            
         } 

        else if (passwordsValue.length < 9) {
            checkInput.setErrorFor(passwords, "The password must have at least 8 characters");
        }

        else {checkInput.setSuccessFor(passwords)}
    

}





  

   










                                 