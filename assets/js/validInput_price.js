import Toastify from 'node_modules/toastify-js/src/toastify-es.js';


//Validar Inputs & Correo
// export class validInput {
//     setSuccessFor(input) {
//         const formControl = input.parentElement;
//          formControl.className = 'form__control success';
//                                      }
    
//     setErrorFor(input, message) {
//             const formControl = input.parentElement;
//             const small = formControl.querySelector('small');
//             formControl.className = 'form__control error';
//              small.innerText = message;
//                                     }
//      setErrorForEmail (email){
//             let regax = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
//             return  regax.test(email);
//                          }
                                        
    
// }

export class validInput {    
    setErrorFor( input ,message) {
        Toastify({
            text: message,
            className: "info",
            duration: "2000",
            position: "center",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();

          const formControl = input.parentElement;
          formControl.className = 'form__control error';
          setTimeout( ()=>{
            formControl.classList.remove('error') ;
          },1000)
        
        }

     setErrorForEmail (email){
            let regax = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
            return  regax.test(email);
                         }
                              
}



//Formato para los precios
 export class price {

    formatPrice = (price) =>{
        const newPrice = new window.Intl.NumberFormat("en-EN" ,{
            style:"currency",
            currency:"USD", }).format(price);
            return newPrice;
    
     };  

     setAddNotification(text) {
        Toastify({
            text: text,
            className: "info",
            duration: "2000",
            position: "center",
            gravity : "top",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();



 }
 
 }
//Notificaiones para el carrit