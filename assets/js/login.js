import {validInput} from "./validInput_price.js";
import {price} from "./validInput_price.js" ;

//variables
const textN = new price();
const username = document.getElementById("email");
const passwords = document.getElementById("password");
const name = document.getElementById("name");
const email = document.getElementById ("emailr");
const passwordr = document.getElementById("passwordr");
const passwordc = document.getElementById("passwordc");
/* Botones para los eventos*/
const btnLogin = document.getElementById('login__btn');
const btnRegister = document.getElementById('register__btn');
//Variables para validad la entrada del localstorage
let fullN = '';
let mail = '';
let pass = '';
let passC = '';
const user = [];

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
        checkInput.setErrorFor(name,  "The full name  field is required");
        return false;

    }

    else if (nameValue.length <6 ) {
        checkInput.setErrorFor( name, "The full name must have at least 6 characters");
        return false;
    }

     else {fullN = true }
    
       //Validar correo

       if (emailValue == ""){
            checkInput.setErrorFor(email ,"The email  field is required" );
            return false;
       }
        else if (!checkInput.setErrorForEmail(emailValue)) {
                 checkInput.setErrorFor( email ,"The email is not valid");
                return false;
      }
     else {  mail = true }

       //Validar contrasena

     if (passwordrValue == "") {
        checkInput.setErrorFor(passwordr, "The password  field is required");
        return false
    }

    else if (passwordrValue.length < 9  ) {
        checkInput.setErrorFor( passwordr, "The password must have at least 8 characters");
        return false
    }
    
    else { pass = true}
    
    //Confirmar password

    if (passwordcValue == "") {
        checkInput.setErrorFor(passwordc, "The password confirm field is required");
        return false;
    }
   
    else if (passwordcValue.length < 9  ) {
        checkInput.setErrorFor( passwordc, "The password must have at least 8 characters");
        return false
    }

    else if ( passwordrValue !== passwordcValue) {
        checkInput.setErrorFor( passwordr, "Passwords have to be the same");
        checkInput.setErrorFor( passwordc, "Passwords have to be the same");
        return false;
        
    }
    else { passC = true;}

    ///////---Validar el correo si existe en la base de datos---////
    if (fullN === true && mail === true && pass === true && passC === true){
        let test;
        if (localStorage.getItem('user') !== null){
            test = JSON.parse (localStorage.getItem("user"));
            const value = test.some( item => item.emailValue === emailValue);
            if (value){
                checkInput.setErrorFor(email,"The email already exist")
            }else { 
                test.push({nameValue,emailValue,passwordrValue});
                localStorage.setItem('user' , JSON.stringify(test));
                //*********//
                btnRegister.classList.add("container__btn_loading");
                btnRegister.innerHTML = "";
                setTimeout(()=>{
                    btnRegister.classList.remove("container__btn_loading");
                    btnRegister.innerHTML = "Register";
                    textN.setAddNotification("Registered User ");
                    name.value = "";
                    email.value = "";
                    passwordr.value = "";
                    passwordc.value = "";
                              },2000);
            }
          
        }else {
            user.push({nameValue,emailValue,passwordrValue})
            localStorage.setItem('user' , JSON.stringify(user));
            //***// */
            btnRegister.classList.add("container__btn_loading");
            btnRegister.innerHTML = "";
            setTimeout(()=>{
                btnRegister.classList.remove("container__btn_loading");
                btnRegister.innerHTML = "Register";
                textN.setAddNotification("Registered User ");
                name.value = "";
                email.value = "";
                passwordr.value = "";
                passwordc.value = "";
                          },2000);
  
        }
        
    
  
    }


    
    }
        



function login () {
    
     let usernameValue = username.value.trim();
     let passwordsValue = passwords.value.trim();
     
    if (usernameValue == "") {

            checkInput.setErrorFor( username, "The username field is required");
            return false;

        }

        else if (! checkInput.setErrorForEmail(usernameValue)) {
            checkInput.setErrorFor(username, "The email is not valid")
            return false;
       }

       else  { 
                mail = true;
               
                 }

         if (passwordsValue == "") {
            checkInput.setErrorFor(passwords, "The password field is required");
            return false
            
         } 

        else if (passwordsValue.length < 9) {
            checkInput.setErrorFor(passwords, "The password must have at least 8 characters");
            return false
        }

        else { pass = true }

        //----Valida correo y pass si existen en la base de datos
        if (mail === true && pass === true){
            let us;
            us = JSON.parse (localStorage.getItem("user"));
            const value = us.some(element => element.emailValue === usernameValue);
            if (value){
                let isLog = us.some(element =>element.emailValue === usernameValue && element.passwordrValue === passwordsValue);
                if (isLog){
                    let session = us.find(element => element.emailValue == usernameValue);
                    sessionStorage.setItem('session', JSON.stringify(session));
                    window.location.href = '/public/home.html';
                } else { 
                    checkInput.setErrorFor(username,"username and passwords are incorrect");
                    
                }    
            }else { checkInput.setErrorFor(username,"The email do not exist , please register ");
           }
        }

    

}





  

   










                                 