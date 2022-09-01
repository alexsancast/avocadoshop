import {price} from "./validInput_price.js" ;
    
         const API = 'https://platzi-avo.vercel.app';
         const stringItem =  localStorage.getItem('item')
         const itemObject = JSON.parse(stringItem);
         //Formato de precio
          const priceFormat = new price();
          //Variables 
          const container = document.querySelector(".container");
          const containerAttributes = document.querySelector(".container__attributes");
          //Seleccionar el contenedor de los atributos
    const loadDataDetails =() => {
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
          const button  = document.createElement("button");
          button.classList.add("container__btn");
          button.textContent="Add to card";
          
          //Anadimos input para la cantidad 
          const input = document.createElement("input");
          input.classList.add("container__input");
          input.setAttribute("type","number" );
          
          

         
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
         container.appendChild(card);
         card.append(img ,name ,description,price ); //**Insertar imagen/desc/name/precio a la carta */
         card.appendChild(containerChild);
         containerAttributes.append( pShape , pHardiness ,pTaste);
         card.appendChild(containerAttributes);
         containerChild.append(input,button);
         
       
         
         
         

         

      
    };

    loadDataDetails();
   
        
   
            


             
          
          
        
