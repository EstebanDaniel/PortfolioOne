import { valida } from "./validacion.js";

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


 



