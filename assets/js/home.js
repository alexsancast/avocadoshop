import {price} from "./validInput_price.js" ;
//LLAMADA A LA API PARA OBTENER LOS DATOS
const API = 'https://platzi-avo.vercel.app';
//Instanciamos la clave para el formato de moneda
const priceFormat = new price();
const cart = []
const search = [];
//variables para el html
const container = document.querySelector(".container"); /// Contenedor principal
const amount = document.querySelector('.cart__amount');//cantidad de productos
// let table = document.querySelector("table");//tabla de productos
// let tableBody = document.createElement("tbody");//cuerpo de la tabla
// const btn= document.getElementById('btn-cart');//BOTON OCULTAR CARRITO
// const element = document.getElementById('element');//elemento para mostrar el carrito
const inputFind = document.querySelector(".search__input"); // Input para el buscador
// const barMenu = document.querySelector(".img-bar"); // Barra para mostrar el menu lateral
// const asideMenu = document.querySelector(".about-menu-aside"); // menu leteral
// const closeBar = document.querySelector(".img-close");


//Llamar a la api para obetener los datos & cargar la pagina
    window.addEventListener('DOMContentLoaded',async function() {
        const apiAvocado = await fetch (`${API}/api/avo`);
        const data = await apiAvocado.json();
        // const item = localStorage.setItem('cart', JSON.stringify(data));
        // const item2 = JSON.parse(this.localStorage.getItem("cart"))
        fillCart(data);

    }) ;     
    
// Funcion para llenar las carts
 function fillCart (data) {            
    // const value = document.querySelector('.value');
        data.data.forEach(element => {
        search.push(element)
        //Creamos las cartas que estaran dentro del container
        const card = document.createElement("div");
        card.classList.add("container__card");
        card.dataset.id = element.id;

        //Adanimos la imagen de aguacate en la carta
        const img = document.createElement("img");
        img.classList.add("container__img_card");
        img.src = `${API}${element.image}`;
        img.dataset.id = element.id;

        //Adanimos el nombre del aguacate
        const name = document.createElement("h2");
        name.classList.add("container__name_card");
        name.textContent = `${element.name}`;
        name.dataset.id = element.id;


        //Anadimos la descripcion del aguacate
        const description = document.createElement("small")
        description.classList.add("container__desc_card");
        description.textContent = (`${element.attributes.description}`);


        //Anadimos el precio del aguacate
        const price = document.createElement("p");
        price.classList.add("container__pricec_card");
        price.textContent = priceFormat.formatPrice(element.price);

        //Anadimos el boton del aguacate
        const button = document.createElement("button");
        button.classList.add("container__btn_card");
        button.textContent = "Add";
        button.dataset.id = element.id;

        //Lo inyectamos en el doc html
        container.appendChild(card);
        card.append(img, name, description, price, button);

        //Eventos con los botones
        card.addEventListener('click', (e) => {viewProduct(e)});
        name.addEventListener('click', viewProduct);
        button.addEventListener('click', (e) => { addToCart(e, data);});
          })
}

//Agregar al carrito

function addToCart(e, data) {
    let id = e.target.dataset.id; //Obtenemos el id del aguacate
    let product = data.data.find(product => product.id === id);//Obtenemos el aguacate
    if (localStorage.getItem('cart') !== null){
         let test = JSON.parse (localStorage.getItem("cart"));
         const existing = test.some(p => p.id === product.id);//Verificamos si el aguacate ya esta en el carrito
             if(existing){
                  test.find(p => p.id === product.id).quantity++;//Si el aguacate ya esta en el carrito, aumentamos la cantidad
                  localStorage.setItem('cart' , JSON.stringify(test));
                  
                 }
              else {
          test.push({...product, quantity: 1});//Si el aguacate no esta en el carrito, lo agregamos al carrito con una cantidad de 1
          localStorage.setItem('cart' , JSON.stringify(test));
         } 
    } else {
           localStorage.setItem('cart', JSON.stringify(cart));
           let test = JSON.parse (localStorage.getItem("cart"));
           const existing = test.some(p => p.id === product.id);//Verificamos si el aguacate ya esta en el carrito
               if(!existing){
                test.push({...product, quantity: 1});//Si el aguacate no esta en el carrito, lo agregamos al carrito con una cantidad de 1
                localStorage.setItem('cart' , JSON.stringify(test));
                   }
                   
}             
           let p = JSON.parse( localStorage.getItem("cart"));
          amount.innerHTML = p.map (quali =>  quali.quantity ).reduce((coun , qual)=> coun + qual) ; 
               
}

// //FUNCION PARA VER EL DETALLE DEL PRODUCTO
function viewProduct(e) {
    if (e.target.classList.contains('container__card') || e.target.classList.contains('container__name_card')) {
        const id = e.target.dataset.id;
         fetch(`${API}/api/avo/${id}`).then(prueba => prueba.json())
            .then(data => {
                    e.preventDefault();
                    localStorage.setItem('item', JSON.stringify(data));
                    window.location.href = '/public/details.html';
                }
            ).catch(err => {
            console.log(err)
        });

   
    }


}

// //Funcion para buscar los aguacates
inputFind.addEventListener( 'keyup' , () => {
    //Variables
    const text = inputFind.value.toLowerCase(); //Lo llevamos a minusculas
    const namesAvocados = search.map(({name, id}) => ({name, id})); // Tomamos el nuevo array
    let list = "";
    
     namesAvocados.forEach(({name, id}) =>{
        let aguacate = name.toLowerCase();
        if (aguacate.indexOf(text) !== -1){
            document.querySelector(`[data-id="${id}"]`).hidden = false;
            list += `<li><a href=""> <i  class="fa-solid fa-magnifying-glass " ></i>${name}</a> </li>` 
        } else {
            document.querySelector(`[data-id="${id}"]`).hidden = true;
        }
    });

     
    
});


//Cargar pagina con los item 
    window.addEventListener('DOMContentLoaded', (event) => {
        let a = JSON.parse( localStorage.getItem("cart"));
        amount.innerHTML = a.map (quali =>  quali.quantity ).reduce((coun , qual)=> coun + qual) ;    
    
});






