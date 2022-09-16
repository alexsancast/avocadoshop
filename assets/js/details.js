        import {price} from "./validInput_price.js" ;
        import { previewCart } from "./fillcart.js";
    
        const API = 'https://platzi-avo.vercel.app';
        const stringItem =  localStorage.getItem('item');
        const amount = document.querySelector(".cart__amount");
         ///---------------------------------------------
        const itemObject = JSON.parse(stringItem);
         //Formato de precio
        const priceFormat = new price();
        const newCart = new previewCart();
        const cart = [];
          //Variables 
        const container = document.querySelector(".container");
        const containerAttributes = document.querySelector(".container__attributes");
          //Seleccionar el contenedor de los atributos
        window.addEventListener('DOMContentLoaded', (event) => {
          
         //Crear una carta 
             const card = document.createElement ("div");
             card.classList.add("container__card");

          //Crear div para la cantidad y el boton
            const containerChild = document.createElement("div");
            containerChild.classList.add("container__add_amount");


          //Ananimos la imagen de aguacate en la carta
             const img = document.createElement("img");
             img.classList.add("container__img");
             img.src = `${API}${itemObject.image}`;

          //Anadimos el nombre del aguacate 
             const name = document.createElement("h1");
             name.classList.add("container__name");
             name.textContent = `${itemObject.name}`

          //Anadimos la descripcion
              const description = document.createElement ("p");
              description.classList.add("container__desc");
              description.textContent= `${itemObject.attributes.description}`;

          //Anadimos el precio 
            const price = document.createElement ("p");
             price.classList.add("container__price");
             price.textContent = priceFormat.formatPrice( itemObject.price) ;

          //Anadimos el boton
   
             const add = document.createElement('p');
             const button  = document.createElement("button");
             add.classList.add("btn__add");
             add.textContent ="Add to cart"
             button.classList.add("container__btn");
            //  button.classList.add("container__btn_loading");
         
          
          //Anadimos input para la cantidad 
             const input = document.createElement("input");
             input.classList.add("container__input");
             input.setAttribute("type","number" );
             input.setAttribute("min","0" );
             input.setAttribute("max","100" );
             input.setAttribute("value","1" );

          
          //cargar la cantidad de carrito 

         
          //Anadimos los atributos

          //-----------------------------------------------
           const pShape= document.createElement("p");
           pShape.classList.add("pshape");
           pShape.textContent =`${itemObject.attributes.shape}`;

           //----------------------------------------------
           const pHardiness= document.createElement("p");
           pHardiness.classList.add("phardiness");
           pHardiness.textContent =`${itemObject.attributes.hardiness}`;

           //---------------------------------------------
           const pTaste= document.createElement("p");
           pTaste.classList.add("ptaste");
           pTaste.textContent =`${itemObject.attributes.taste}`;


      
          //Insertamos los elementos
             button.appendChild(add);
             container.appendChild(card);
             card.append(img ,name ,description,price ); //**Insertar imagen/desc/name/precio a la carta */
             card.appendChild(containerChild);
             containerAttributes.append( pShape , pHardiness ,pTaste);
             card.appendChild(containerAttributes);
             containerChild.append(input,button);
       

         //Funciones
            button.addEventListener('click', (e) => { addToCart(input)});

         
         //Boton loader 
           button.addEventListener("click" ,()=> {
               button.classList.add("container__btn_loading")
               setTimeout(()=>{
                  button.classList.remove("container__btn_loading")
               },1000)
            })

            //Carrito Amount 
            if (localStorage.getItem('cart') !== null){
               let p = JSON.parse( localStorage.getItem("cart"));
               amount.innerHTML = p.map (quali =>  quali.quantity ).reduce((coun , qual)=> coun + qual) ;  
               newCart.loadCart();
           } 
   
            
           
            

            
      }
         
      );

    
    //Anadir al carrito 
  
     function addToCart(input){
      
        let inputAmount = Number(input.value) ;
        let product = itemObject ;
        if (localStorage.getItem('cart') !== null){
             let test = JSON.parse (localStorage.getItem("cart"));
             const existing = test.some(p => p.id === product.id);//Verificamos si el aguacate ya esta en el carrito
             if(existing){
                      test.find(p => p.id === product.id).quantity += inputAmount;//Si el aguacate ya esta en el carrito, aumentamos la cantidad
                      localStorage.setItem('cart' , JSON.stringify(test));
                      
                     }else {
                        test.push({...product, quantity: inputAmount});//Si el aguacate no esta en el carrito, lo agregamos al carrito con una cantidad de 1
                        localStorage.setItem('cart' , JSON.stringify(test));
                       } 
                  } 
                  
                  
         else {
               localStorage.setItem('cart', JSON.stringify(cart));
               let test = JSON.parse (localStorage.getItem('cart'));
               console.log(test);
               const existing = test.some(p => p.id === product.id);//Verificamos si el aguacate ya esta en el carrito
                if(!existing){
                        test.push({...product, quantity: inputAmount});//Si el aguacate no esta en el carrito, lo agregamos al carrito con una cantidad de 1
                        localStorage.setItem('cart' , JSON.stringify(test));
                                 }
              } 
              
              if (localStorage.getItem('cart') !== null){
               let p = JSON.parse( localStorage.getItem("cart"));
               setTimeout(()=>{
                amount.innerHTML = p.map (quali =>  quali.quantity ).reduce((coun , qual)=> coun + qual) ; 
                newCart.loadCart();
             },1000)
          


              }
        
            
           
    
     }
    

   

   

  
            
       
      
  

             
          
          
        
