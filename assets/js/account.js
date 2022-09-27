
import { previewCart } from "./fillcart.js";
const newCart = new previewCart();

//Capturas los elementos de html
const amount = document.querySelector(".cart__amount");
const name = document.querySelector(".account__name");
const mail = document.querySelector(".account__email");
const user = JSON.parse (sessionStorage.getItem('session')) ;

//------//
name.innerHTML= user.nameValue
mail.innerHTML = user.emailValue;






window.addEventListener('DOMContentLoaded', (event) => {
    //Cargar la cantidad en el carrito 
   if (localStorage.getItem('cart') !== null &&  JSON.parse(localStorage.getItem('cart')).length >0 )  {
       let a = JSON.parse( localStorage.getItem("cart"));
       amount.innerHTML = a.map (quali =>  quali.quantity ).reduce((coun , qual)=> coun + qual) ;  
   } else {console.log("No hay data")}

//**--------------------------------------------- */

   //Cargar el usuario para mostrar
   // let p = JSON.parse(sessionStorage.getItem("session"));
   // myAccount.innerHTML =p.nameValue;

   newCart.loadCart();
    
        
 
   

});
