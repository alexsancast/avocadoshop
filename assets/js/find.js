

//Variables
const btnFind = document.querySelector(".header__btn_search"); // Boton Para la busqueda
const searhMenu = document.querySelector(".search_menu");//Barra de busqueda
const results = document.querySelector(".results");//Resultados de la busqueda
const cover = document.querySelector(".cover");//Pantalla de fondo oscura
const inputFind = document.querySelector(".search_menu_input");// Input para el buscador






btnFind.addEventListener('click',()=>{
    searhMenu.style.top = "70px";
    cover.style.display = "block";
    inputFind.focus();


})


cover.addEventListener('click', ()=>{
    searhMenu.style.top = "-80px";
    cover.style.display = "none";
    inputFind.value = "";
    results.style.display = "none";
})