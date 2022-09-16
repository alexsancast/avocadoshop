
import {price} from "./validInput_price.js" ;
//Variables
const API = 'https://platzi-avo.vercel.app';
const priceFormat = new price();
const preview = document.querySelector(".preview");


export class previewCart {

    loadCart = ()=>{

        if (localStorage.getItem('cart') !== null){
          preview.innerHTML = "";
        let item = JSON.parse(localStorage.getItem("cart")) ;
        item.forEach (element =>{
       //crear contenedor para las cards
         let card = document.createElement("div");
         card.classList.add("preview__card_shop");
       //Contenedor para las imagen y nombre
         let imgName = document.createElement("div");
         imgName.classList.add ("preview__name");
       //Contenedor para la cantidad e imagen trash
         let quaImg = document.createElement("div");
         quaImg.classList.add("card_shop_trash");
    
       //Crear imagen aguacate 
         let img = document.createElement("img");
         img.classList.add("card_shop__img");
         img.src = `${API}${element.image}`; 
       
       //crear el nombre de aguacate
         let name = document.createElement("h2");
         name.classList.add("card_shop__name");
         name.innerHTML = element.name;
    
       //Crear el precio 
         let price = document.createElement("p");
         price.classList.add("card_shop__price");
         price.innerHTML = priceFormat.formatPrice(element.price);
    
       //Crear Cantidad
         let qua= document.createElement("p");
         qua.classList.add("card_shop__qua");
         qua.innerHTML = `x${element.quantity}`;
    
       //Crear imgaen 
         let trash = document.createElement("img");
         trash.classList.add("card_shop__trash");
         trash.src = "/assets/img/trash-bin.png";
       //Agregar los nodos al html
         quaImg.append(qua,trash);
         imgName.append(img,name);
         card.append(imgName,quaImg,price);
         preview.append(card);
    })
       //contanedor princiapl 
       let containerSub =  document.createElement("div");
        containerSub.classList.add("preview__container_sub");
    
       //Contenedor para el subtotal 
       let sub = document.createElement("div");
       sub.classList.add("preview__card_sub");
       //Valor para el total 
       let val = document.createElement("p");
       val.classList.add("card_sub__value");
       val.innerHTML =  priceFormat.formatPrice(item.map(element => element.price * element.quantity).reduce((cont ,val)=> cont + val))
       
       //Label Subtotal
       const subtotal = document.createElement ("h2");
       subtotal.classList.add("card_sub__subtotal");
       subtotal.innerHTML = "Subtotal ";
    
       //Boton preview 
       const checkout = document.createElement("button");
       checkout.classList.add("card_sub__btn");
       checkout.innerHTML = "Review Cart"
    
    
       
    
       //Anadir al html
       sub.append(subtotal,val);
       containerSub.append(sub,checkout);
       preview.append(containerSub);
    
       checkout.addEventListener("click", ()=>{
        window.location.href = '/public/checkout.html';
       })
    
    
       
    
    
         }else {console.log("No tienes items en el carrito")}
    

}


    }
        

