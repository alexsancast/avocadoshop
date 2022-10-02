
import { previewCart } from "./fillcart.js";
const newCart = new previewCart();


const amount = document.querySelector(".cart__amount");
const myAccount = document.querySelector(".username_menu__p");
const myAccountHam = document.querySelector (".username_menu__ham");

window.addEventListener('DOMContentLoaded', (event) => {
    //Cargar la cantidad en el carrito 
   if (localStorage.getItem('cart') !== null &&  JSON.parse(localStorage.getItem('cart')).length >0 )  {
       let a = JSON.parse( localStorage.getItem("cart"));
       amount.innerHTML = a.map (quali =>  quali.quantity ).reduce((coun , qual)=> coun + qual) ;  
   } else {console.log("No hay data")}

//**--------------------------------------------- */

   //Cargar el usuario para mostrar
   let p = JSON.parse(sessionStorage.getItem("session"));
   myAccount.innerHTML = `Hi , ${ p.nameValue}`;
   myAccountHam.innerHTML = `Hi , ${ p.nameValue}`;

   newCart.loadCart();
    
        
 
   

});
