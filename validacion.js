//funcion que realiza la validacion del formulario, junto con los cambios de estilos css
//ademas de habilitar y deshabilitar el boton submit
export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    

    if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input);
      console.log(validadores[tipoDeInput]);
    }
    
    if (input.validity.valid) {
      
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.classList.add("input-container--valid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
      submitBtn.disabled = false;
      
    } else {
      
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.classList.remove("input-container--valid");
      input.parentElement.querySelector(".input-message-error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, input);
        submitBtn.disabled = true;
    }
    
    console.log(tipoDeInput,input);
  
  }
  
  //array que contiene los tipos de error de los inputs
  const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ];
  
  //objeto que contiene los mensajes de error personalizados
  const mensajesDeError = {
    nombre: {
      valueMissing: "El campo 'nombre' no puede estar vacío.",
      patternMismatch: "El nombre debe contener de 4 a 50 caracteres.",
    },
    email: {
      valueMissing: "El campo 'correo' no puede estar vacío.",
      typeMismatch: "El correo no contiene un formato válido.",
    },
    asunto: {
      valueMissing: "El campo 'asunto' puede estar vacío.",
      patternMismatch: "El asunto debe contener de 4 a 50 caracteres.",
    },
    mensaje: {
      valueMissing: "El campo 'mensaje' no puede estar vacío.",
      customError: "El campo mensaje debe tener al menos 4 caracteres, con un máximo de 300.",
      
    },
  };
  
  //objeto que contiene el metodo para el textarea "mensaje"
  const validadores = {
    mensaje: (input) => validarMensaje(input),
  };

  //mesajes de error de los inputs del formulario
  function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        console.log("tipo de input y error:", tipoDeInput, error);
        console.log("input validity boolean:",input.validity[error]);
        console.log("mensaje de error:",mensajesDeError[tipoDeInput][error]);
        mensaje = mensajesDeError[tipoDeInput][error];
        console.log(mensaje)
      }
    });
    return mensaje;
  }

  //validacion del textarea "mensaje"
  function validarMensaje(input) {
    const txt = input.value;
    let mensaje = "";
    if (txt.length <4 && txt.length != 0  || txt.length > 300) {
      mensaje = "El campo 'mensaje' debe tener al menos 4 caracteres, y como máximo 300";
    }
   
    input.setCustomValidity(mensaje);
    
  }


