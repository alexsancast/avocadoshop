const preview  = document.querySelector(".preview");
const cartImg = document.querySelector(".cart__img");


//Clase para cargar el loader
window.addEventListener("load" , ()=> {
    this.document.querySelector(".loader").classList.toggle("loader2");

})



//Barra para el carrito 
cartImg.addEventListener("click" ,()=>{

    if (preview.style.visibility == "hidden") {
        preview.style.visibility = "visible";

    }else { preview.style.visibility ="hidden"}
    
})



