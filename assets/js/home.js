
//LLAMADA A LA API PARA OBTENER LOS DATOS
const API = 'https://platzi-avo.vercel.app';
//variables
const search = [];
let cart = [];
let onclick = false;

//Instanciamos la clave para el formato de moneda
// const priceFormat = new price();
//variables para el html
const container = document.querySelector(".container"); /// Contenedor principal
// const amount = document.getElementById('amount');//cantidad de productos
// let table = document.querySelector("table");//tabla de productos
// let tableBody = document.createElement("tbody");//cuerpo de la tabla
// const btn= document.getElementById('btn-cart');//BOTON OCULTAR CARRITO
// const element = document.getElementById('element');//elemento para mostrar el carrito
const inputFind = document.querySelector(".search_menu_input"); // Input para el buscador
const results  = document.querySelector('.results'); //Resultados para la busqueda
// const barMenu = document.querySelector(".img-bar"); // Barra para mostrar el menu lateral
// const asideMenu = document.querySelector(".about-menu-aside"); // menu leteral
// const closeBar = document.querySelector(".img-close");
document.addEventListener("DOMContentLoaded", (e)=> {
    element.style.visibility = "hidden";

});//DOMContentLoaded

// btn.addEventListener('click',()=>{

// if(!onclick) {
//     element.style.visibility = "visible";
//     onclick = true;
// }else if (onclick) {
//     element.style.visibility = "hidden";
//     onclick = false;
// }

// });//PONE VISIBLE EL DETALLE DEL CARRITO



//Llamar a la api para obetener los datos
 async function loadData () {
    const apiAvocado = await fetch (`${API}/api/avo`);
     const data = await apiAvocado.json();
     fillCart(data);

 }
    



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
        price.textContent = element.price ;
        // price.textContent = priceFormat.formatPrice(element.price);

        //Anadimos el boton del aguacate
        const button = document.createElement("button");
        button.classList.add("container__btn_card");
        button.textContent = "Add";
        button.dataset.id = element.id;

        //Lo inyectamos en el doc html
        container.appendChild(card);
        card.append(img, name, description, price, button);

        //Eventos con los botones
        // card.addEventListener('click', (e) => {viewProduct(e)});
        // name.addEventListener('click', viewProduct);
       
        // button.addEventListener('click', (e) => { addToCart(e, data);});
          })
}

//Agregar al carrito
// function addToCart(e, data) {
//     const id = e.target.dataset.id; //Obtenemos el id del aguacate
//     const product = data.data.find(product => product.id === id);//Obtenemos el aguacate
//     const existing = cart.some(p => p.id === product.id);//Verificamos si el aguacate ya esta en el carrito
    



//     if(existing){

//        cart.find(p => p.id === product.id).quantity++;//Si el aguacate ya esta en el carrito, aumentamos la cantidad
//     }
//     else {
//         cart.push({...product, quantity: 1});//Si el aguacate no esta en el carrito, lo agregamos al carrito con una cantidad de 1
//         amount.innerText = cart.length;
//     }



//     printCarShop(cart);//Pintamos el carrito



// }

// //FUNCION PARA VER EL DETALLE DEL PRODUCTO
// function viewProduct(e) {
//     if (e.target.classList.contains('card') || e.target.classList.contains('name-aguacate')) {
//         const id = e.target.dataset.id;
//         fetch(`${API}/api/avo/${id}`).then(prueba => prueba.json())
//             .then(data => {
//                     e.preventDefault();
//                     localStorage.setItem('item', JSON.stringify(data));
//                     window.location.href = '/public/details.html';


//                     // Turbolinks.visit =('/public/details.html');


//                 }
//             ).catch(err => {
//             console.log(err)
//         });


//     }


// }

// //Funcion para buscar los aguacates
inputFind.addEventListener( 'keyup' , ()=>{

        //Variables
        results.innerHTML='';
        results.style.display = "block";
        const text = inputFind.value.toLowerCase(); //Lo llevamos a minusculas
        const namesAvocados = newArrayAvocado(); // Tomamos el nuevo array
        ///////
        function newArrayAvocado (){
    
            let newAvocados = []
            search.forEach(element =>{
                   newAvocados.push(element.name);
                  
            }  ); return newAvocados;
        
                
        }
        
         namesAvocados.forEach(name =>{ 
            let aguacate = name.toLowerCase();
            if (aguacate.indexOf(text) !== -1){
    
                results.innerHTML += `<li><a href=""> <i  class="fa-solid fa-magnifying-glass " ></i>${name}</a> </li>` 
    
            }
            
            if (inputFind.value ==''){
                results.style.display = "none";
        
            }
            
         })    
        


})  



// //FUNCION PARA IMPRIMIR EL CARRITO
// const printCarShop = (data) => {

//     tableBody.innerHTML = "";

//     data.forEach((item) => {
//         let fila = document.createElement("tr");
//         let image = document.createElement('img')
//         let td = document.createElement("td");


//         td.innerHTML = item.name;
//         fila.appendChild(td);

//         td = document.createElement("td");
//         // image.src = item.image;
//         image.src = `${API}${item.image}`;
//         fila.appendChild(td);
//         fila.appendChild(image);

//         td = document.createElement("td");
//         td.innerHTML = item.quantity;
//         fila.appendChild(td);


//         td = document.createElement("td");
//         td.innerHTML =Math.round(item.price * item.quantity);
//         fila.appendChild(td);

//         tableBody.appendChild(fila);


//     });

//     table.appendChild(tableBody);

// }


// //Mostrar menu lateral
// barMenu.addEventListener("click" , ()=> {

//     if (asideMenu.style.left === "-1700px"){

//         asideMenu.style.left = "0px" ;

//     }
//      else {
//         asideMenu.style.left = "-1700px";

//      }

// })

// //Cerrar menu laterar 

// closeBar.addEventListener('click' , ()=>{
//     if (asideMenu.style.left === "0px"){
        
//         asideMenu.style.left = "-1700px" ;

//     }
// })

// //Menu laterarl 

// asideMenu.addEventListener("click" , ()=>{
//     if (asideMenu.style.left === "0px"){
        
//         asideMenu.style.left = "-1700px" ;

//     }
// })

loadData ();




