document.getElementById("back_box__btn").addEventListener("click",login);
document.getElementById("back_box_btn2").addEventListener("click",register);
window.addEventListener("resize" , loadPage);
//var
var containerForm = document.querySelector(".container__login_register");
var formLogin = document.querySelector(".form__login");
var formRegister = document.querySelector(".form__register");
///
var backBoxLogin = document.querySelector(".back_box__login");
var backBoxRegister = document.querySelector(".back_box__register");

function loadPage (){
    if (window.innerWidth > 804){
        backBoxRegister.style.display = "block";
        backBoxLogin.style.display = "block";


    }else {
        backBoxRegister.style.display = "block";
        backBoxRegister.style.opacity = "1";
        backBoxLogin.style.display = "none";
        formLogin.style.display = "block";
        formRegister.style.display = "none";
        containerForm.style.left = "-25px"


    }
}

loadPage();


function login (){
    if ( window.innerWidth > 804) {
        formRegister.style.display ="none";
        containerForm.style.left = "10px";
        formLogin.style.display = "block";
        backBoxRegister.style.opacity = "1";
        backBoxLogin.style.opacity = "0";

 
    }else {
        formRegister.style.display ="none";
        containerForm.style.left = "-25";
        containerForm.style.top = "100px";
        formLogin.style.display = "block";
        backBoxRegister.style.display = "block";
        backBoxLogin.style.display = "none";
        backBoxLogin.style.opacity = "1";


 
    }

}

function register (){
    if ( window.innerWidth > 804) {
        formRegister.style.display ="block";
        containerForm.style.left = "390px";
        formLogin.style.display = "none";
        backBoxRegister.style.opacity = "0";
        backBoxLogin.style.opacity = "1";

    }else {
        formRegister.style.display ="block";
        containerForm.style.left = "-25px";
        containerForm.style.top = "165px";
        formLogin.style.display = "none";
        backBoxRegister.style.display = "none";
        backBoxLogin.style.display = "block";
        backBoxLogin.style.opacity = "1";
    }
 

}