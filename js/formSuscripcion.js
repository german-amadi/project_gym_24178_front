import {
  validarCampoInput,
  expresiones,
  toggleInput,
  validarCamposRadio,
  validarCamposSelect,
} from "./utils.js";

const formularioSuscripcion = document.getElementById("suscripcion__formulario");
const inputsSuscripcion = document.querySelectorAll(".suscripcion__formulario-input");
const radiosSuscripcion = document.querySelectorAll(".suscripcion__formulario-input-radio");


const camposInput = {
  nombre: false,
  apellido: false,
  correo: false,
  telefono: false,
  direccion: false,
  fecha_nacimiento: false,
  genero: false,
  nombre_emergencia: false,
  apellido_emergencia: false,
  relacion: false,
  telefono_emergencia: false,
  altura: false,
  peso: false,
};

const camposRadio = [
  "condicionMedica",
  "medicamento",
  "lesion",
  "alergia",
  "actividad_fisica",
];

const camposSelect = [
  "genero",
  "tipo_membresia"
];



const validarFormularioSuscripcion = (e) => {
  switch (e.target.name) {
    case "nombre":
      validarCampoInput(
        "suscripcion",
        expresiones.nombre,
        e.target,
        "nombre",
        camposInput
      );
      break;
    case "apellido":
      validarCampoInput(
        "suscripcion",
        expresiones.apellido,
        e.target,
        "apellido",
        camposInput
      );
      break;
    case "correo":
      validarCampoInput(
        "suscripcion",
        expresiones.correo,
        e.target,
        "correo",
        camposInput
      );
      break;
    case "telefono":
      validarCampoInput(
        "suscripcion",
        expresiones.telefono,
        e.target,
        "telefono",
        camposInput
      );
      break;
    case "direccion":
      validarCampoInput(
        "suscripcion",
        expresiones.general,
        e.target,
        "direccion",
        camposInput
      );
      break;
    case "fecha_nacimiento":
      validarCampoInput(
        "suscripcion",
        expresiones.fechaNacimiento,
        e.target,
        "fecha_nacimiento",
        camposInput
      );
      break;
    case "nombre_emergencia":
      validarCampoInput(
        "suscripcion",
        expresiones.nombre,
        e.target,
        "nombre_emergencia",
        camposInput
      );
      break;
    case "apellido_emergencia":
      validarCampoInput(
        "suscripcion",
        expresiones.nombre,
        e.target,
        "apellido_emergencia",
        camposInput
      );
      break;
    case "relacion":
      validarCampoInput(
        "suscripcion",
        expresiones.general,
        e.target,
        "relacion",
        camposInput
      );
      break;
    case "telefono_emergencia":
      validarCampoInput(
        "suscripcion",
        expresiones.telefono,
        e.target,
        "telefono_emergencia",
        camposInput
      );
      break;
    case "altura":
      validarCampoInput(
        "suscripcion",
        expresiones.general,
        e.target,
        "altura",
        camposInput
      );
      break;
    case "peso":
      validarCampoInput(
        "suscripcion",
        expresiones.general,
        e.target,
        "peso",
        camposInput
      );
      break;
  };
}

inputsSuscripcion.forEach((input) => {
  input.addEventListener("keyup", validarFormularioSuscripcion);
  input.addEventListener("blur", validarFormularioSuscripcion);
});
radiosSuscripcion.forEach((radio) => {
  radio.addEventListener("change", () => toggleInput(radio));
});

formularioSuscripcion.addEventListener("submit", (e) => {
  e.preventDefault();

  let radiosValidados = validarCamposRadio("suscripcion", camposRadio)
  let selectValidados = validarCamposSelect("suscripcion", camposSelect);

  if (
    camposInput.nombre &&
    camposInput.apellido &&
    camposInput.correo &&
    camposInput.telefono &&
    camposInput.direccion &&
    camposInput.fecha_nacimiento &&
    camposInput.nombre_emergencia &&
    camposInput.apellido_emergencia &&
    camposInput.relacion &&
    camposInput.telefono_emergencia &&
    camposInput.altura &&
    camposInput.peso &&
    radiosValidados &&
    selectValidados
  ) {
    formularioSuscripcion.reset();
    document.querySelectorAll(".toggle-input").forEach((input) => {
      input.disabled = true;
    });
  } else {
    document
      .getElementById("suscripcion__completarTodo")
      .classList.add("suscripcion__completarTodo-activo");
    setTimeout(() => {
      document
        .getElementById("suscripcion__completarTodo")
        .classList.remove("suscripcion__completarTodo-activo");
    }, 3000);
  }
});

 setTimeout(() => {

 }, 3000);
