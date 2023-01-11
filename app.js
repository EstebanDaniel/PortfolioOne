import { valida } from "./validacion.js";

const $form = document.getElementById('form');
export const submitBtn = document.getElementById('submitBtn');
const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

textareas.forEach((textarea) => {
  textarea.addEventListener("blur", (textarea) => {
    valida(textarea.target); 
  
  });
});

 $form.addEventListener('submit',handleSubmit);

  //funcion de envio de formulario
  async function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
   const response = await fetch(this.action, {
      method: this.method,
      body: form,
      headers:{
        'Accept': 'application/json'
      }
    })
    if(response.ok){
      this.reset();
      location.href = "formulario_enviado.html"
    }
   }
  
  
  



