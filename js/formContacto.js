import { validarCampoInput, expresiones, validarCamposRadio} from "./utils.js";

const formularioContacto = document.getElementById("contacto__formulario");
const inputsContacto = document.querySelectorAll(".contacto_formulario-input");
 
const camposContacto = {
  nombre: false,
  apellido: false,
  correo: false,
  telefono: false,
  consulta: false,
};

const camposRadio = ["conociste"];
  
const validarFormularioContacto = (e) => {
  switch (e.target.name) {
    case "nombre":
      validarCampoInput(
        "contacto",
        expresiones.nombre,
        e.target,
        "nombre",
        camposContacto
      );
      break;
    case "apellido":
      validarCampoInput(
        "contacto",
        expresiones.apellido,
        e.target,
        "apellido",
        camposContacto
      );
      break;
    case "correo":
      validarCampoInput(
        "contacto",
        expresiones.correo,
        e.target,
        "correo",
        camposContacto
      );
      break;
    case "telefono":
      validarCampoInput(
        "contacto",
        expresiones.telefono,
        e.target,
        "telefono",
        camposContacto
      );
      break;
    case "consulta":
      validarCampoInput(
        "contacto",
        expresiones.consulta,
        e.target,
        "consulta",
        camposContacto
      );
      break;
  }
};

inputsContacto.forEach((input) => {
  input.addEventListener("keyup", validarFormularioContacto);
  input.addEventListener("blur", validarFormularioContacto);
});

formularioContacto.addEventListener("submit", (e) => {
  e.preventDefault();
   let radiosValidados = validarCamposRadio("contacto", camposRadio);


  if (
    camposContacto.nombre &&
    camposContacto.telefono &&
    camposContacto.correo &&
    camposContacto.consulta &&
    radiosValidados
  ) {
    formularioContacto.reset();
  } else {
    document
      .getElementById("contacto__completarTodo")
      .classList.add("contacto__completarTodo-activo");
    setTimeout(() => {
      document
        .getElementById("contacto__completarTodo")
        .classList.remove("contacto__completarTodo-activo");
    }, 3000);
  }
});
