document.getElementById("back_box__btn").addEventListener("click",login);
document.getElementById("back_box_btn2").addEventListener("click",register);

//var
var containerForm = document.querySelector(".container__login_register");
var formLogin = document.querySelector(".form__login");
var formRegister = document.querySelector(".form__register");
///
var backBoxLogin = document.querySelector(".back_box__login");
var backBoxRegister = document.querySelector(".back_box__register");




function login (){
    formRegister.style.display ="none";
    containerForm.style.left = "10px";
    formLogin.style.display = "block";
    backBoxRegister.style.opacity = "1";
    backBoxLogin.style.opacity = "0";

}

function register (){
    formRegister.style.display ="block";
    containerForm.style.left = "390px";
    formLogin.style.display = "none";
    backBoxRegister.style.opacity = "0";
    backBoxLogin.style.opacity = "1";

}