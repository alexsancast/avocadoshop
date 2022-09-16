
import {price} from "./validInput_price.js" ;
const API = 'https://platzi-avo.vercel.app';

//Capturamos los datos del carrito

//
const priceFormat = new price();
const itemCheckout = document.querySelector(".container__items_checkout");
const item = JSON.parse(localStorage.getItem("cart")) ;


const contItems = document.querySelector(".container__items");
const contCheckout = document.querySelector(".container__checkout");

//Pintar los datos en la pagina 
window.addEventListener('DOMContentLoaded' , (event)=>{
    item.forEach  (element =>{
        //Card para los aguacates
        const card = document.createElement("div");
        card.classList.add("items__cart");
        //imagen del aguacate 
        let img = document.createElement("img");
        img.classList.add("items__img");
        img.src = `${API}${element.image}`;

        //nombre del aguacate 
        let name = document.createElement("h2");
        name.classList.add("items__name");
        name.innerHTML = `${element.name}`;
   
        //Precio 
        let price = document.createElement("p");
        price.classList.add("items__price");
        price.innerHTML= priceFormat.formatPrice(element.price)
             
        //Cantidad
        let quan = document.createElement("p");
        quan.classList.add("items__quan");
        quan.innerHTML = ` x ${element.quantity}`;
        
        //Cantidad X precio 
        let quanPrice = document.createElement("p");
        quanPrice.classList.add("items__quanprice");
        quanPrice.innerHTML = priceFormat.formatPrice(item.map(elemt =>  elemt.quantity * elemt.price));
        //imagen close
        let close = document.createElement("img");
        close.classList.add("items__close");
        close.src= "/assets/img/checkout/close.png";
        close.dataset.id = element.id


        //Funciones 
        close.addEventListener("click" , (e)=>removeItem(e))
        //Agregar elementos al html
        card.append(img ,name,price,quan,quanPrice,close);
        contItems.append(card);
           })

        //contenedor subotal y precio
        let contSub = document.createElement("div");
        contSub.classList.add("container__subprice");
        //contenedor para input , label y boton 
         let contInputBtn = document.createElement("div");
         contInputBtn.classList.add("container__inputbtn");
     
         //Label subtotal
         let subtotal = document.createElement("h2");
         subtotal.classList.add("checkout__subtotal");
         subtotal.innerHTML = "Subtotal"

        //Precio subtotal 
        let subPrice = document.createElement("p");
         subPrice.classList.add("checkout__price");
         subPrice.innerHTML = priceFormat.formatPrice(item.map(val => val.price * val.quantity).reduce((cont ,val)=> cont + val));

        //Parrafo 
        let p = document.createElement("p");
        p.classList.add("checkout__p");
        p.innerHTML = "Special instructions for seller";

        //input para el seller 
        let input = document.createElement("input");
        input.classList.add("checkout__input");

        //Boton 
        let btn = document.createElement("button");
        btn.classList.add("checkout__btn");
        btn.innerHTML = "Check out";

        //Agregar al html
        contSub.append(subtotal,subPrice);
        contInputBtn.append(p,input,btn)
        contCheckout.append(contSub,contInputBtn);
        itemCheckout.append(contItems , contCheckout);

});

  function removeItem (e){
     const id = e.target.dataset.id;
     const objItem = item.findIndex(obj=> obj.id == id);
     const newItem = item.splice (objItem,1);
     console.log(newItem);
      
  }

