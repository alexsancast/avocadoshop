

//Variables 

const btnHam = document.querySelector(".header__btn_ham");
const slideMenu = document.querySelector(".menu_ham");
const closeMenu = document.querySelector(".nav__img");


//Mostrar Menu

btnHam.addEventListener("click" , ()=> {

    if (slideMenu.style.left === "-1700px"){

        slideMenu.style.left = "0px" ;

    }
     else {
        slideMenu.style.left = "-1700px";

     }

})

//Cerrar menu lateral con el boton 

closeMenu.addEventListener('click' , ()=>{
    if (slideMenu.style.left === "0px"){
        
        slideMenu.style.left = "-1700px" ;

    }
})

//Cerrar el menu lateral 
slideMenu.addEventListener("click" , ()=>{
    if (slideMenu.style.left === "0px"){
        
        slideMenu.style.left = "-1700px" ;

    }
})

