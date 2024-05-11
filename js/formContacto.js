const formularioContacto = document.getElementById("contacto__formulario");
const inputsContacto = document.querySelectorAll(".contacto_formulario-input");
 const radiosContacto = document.querySelectorAll(
   ".contacto__formulario-input-radio"
);
 
 const expresiones = {
   nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
   apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
   correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
   telefono: /^\d{7,14}$/, // 7 a 14 numeros.
   consulta: /^[a-zA-ZÀ-ÿ\s]{5,40}$/,
};
 

const camposContacto = {
  nombre: false,
  apellido: false,
  correo: false,
  telefono: false,
  conociste: false,
  consulta: false,
};
  
const validarFormularioContacto = (e) => {
  switch (e.target.name) {
    case "nombre":
      validarCampo("contacto", expresiones.nombre, e.target, "nombre");
      break;
    case "apellido":
      validarCampo("contacto", expresiones.apellido, e.target, "apellido");
      break;
    case "correo":
      validarCampo("contacto", expresiones.correo, e.target, "correo");
      break;
    case "telefono":
      validarCampo("contacto", expresiones.telefono, e.target, "telefono");
      break;
    case "conociste":
      validarRadio(e.target, "conociste");
      break;
    case "consulta":
      validarCampo("contacto", expresiones.consulta, e.target, "consulta");
      break;
  }
};

const validarCampo = (form, expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`${form}__formulario-${campo}`)
      .classList.add("activo");
    document
      .getElementById(`${form}__formulario-${campo}`)
      .classList.remove("activo");
    form === "contacto"
      ? (camposContacto[campo] = true)
      : (camposSuscripcion[campo] = true);
  } else {
    document
      .getElementById(`${form}__formulario-${campo}`)
      .classList.add("activo");
    form === "contacto"
      ? (camposContacto[campo] = false)
      : (camposSuscripcion[campo] = false);
  }
};

const validarRadio = (input, campo) => {
  if (input.checked) {
    (camposContacto[campo] = true)
  } else {
    (camposContacto[campo] = false)
  }
};

inputsContacto.forEach((input) => {
  input.addEventListener("keyup", validarFormularioContacto);
  input.addEventListener("blur", validarFormularioContacto);
});

radiosContacto.forEach((radio) => {
  radio.addEventListener("change", validarFormularioContacto);
});

formularioContacto.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("ando");

  if (
    camposContacto.nombre &&
    camposContacto.telefono &&
    camposContacto.correo &&
    camposContacto.conociste &&
    camposContacto.consulta
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