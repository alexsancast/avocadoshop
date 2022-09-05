import {validInput} from "./validInput_price.js";


const username = document.getElementById("email");
const passwords = document.getElementById("password");
const btnLogin = document.querySelector('.login__btn');
// const btnRegister = document.getElementById('register__btn');
const form = document.querySelector("#form-container");

//Instanciar la clase
const checkInput = new validInput();
//capturamos los datos del HTML




btnLogin.addEventListener('click', (e) => {

    e.preventDefault();


    validUser();

})

function validUser () {
    

     const usernameValue = username.value.trim();
     const passwordsValue = passwords.value.trim();
    


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





  

   










                                 