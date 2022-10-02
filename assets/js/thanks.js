const myAccount = document.querySelector(".username_menu__p");
const myAccountHam = document.querySelector (".username_menu__ham");


window.addEventListener('DOMContentLoaded' , ()=>{
    let p = JSON.parse(sessionStorage.getItem("session"));
    myAccount.innerHTML = `Hi , ${ p.nameValue}`;
    myAccountHam.innerHTML = `Hi , ${ p.nameValue}`;
})