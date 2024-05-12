const formularioSuscripcion = document.getElementById("suscripcion__formulario");
const inputsSuscripcion = document.querySelectorAll(".suscripcion__formulario-input");

const radiosSuscripcion = document.querySelectorAll(".suscripcion__formulario-input-radio");
const selects = document.querySelectorAll(".suscripcion__formulario-input-select");

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    consulta: /^[a-zA-ZÀ-ÿ\s]{5,40}$/,
    general: /^[a-zA-ZÀ-ÿ0-9\s]{1,40}$/,
    fechaNacimiento: /.+/,
  };


  const camposSuscripcion = {
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
    condicionMedica: false,
    medicamento: false,
    lesion: false,
    alergia: false,
    altura: false,
    peso: false,
    actividad_fisica: false,
    tipo_membresia: false,
  };


  const validarFormularioSuscripcion = (e) => {
    switch (e.target.name) {
      case "nombre":
        validarCampo("suscripcion", expresiones.nombre, e.target, "nombre");
        break;
      case "apellido":
        validarCampo("suscripcion", expresiones.apellido, e.target, "apellido");
        break;
      case "correo":
        validarCampo("suscripcion", expresiones.correo, e.target, "correo");
        break;
      case "telefono":
        validarCampo("suscripcion", expresiones.telefono, e.target, "telefono");
        break;
      case "direccion":
        validarCampo("suscripcion", expresiones.general, e.target, "direccion");
        break;
      case "fecha_nacimiento":
        validarCampo(
          "suscripcion",
          expresiones.fechaNacimiento,
          e.target,
          "fecha_nacimiento"
        );
        break;
      case "genero":
        validarSelect(e.target, "genero");
        break;
      case "nombre_emergencia":
        validarCampo(
          "suscripcion",
          expresiones.nombre,
          e.target,
          "nombre_emergencia"
        );
        break;
      case "apellido_emergencia":
        validarCampo(
          "suscripcion",
          expresiones.nombre,
          e.target,
          "apellido_emergencia"
        );
        break;
      case "relacion":
        validarCampo("suscripcion", expresiones.general, e.target, "relacion");
        break;
      case "telefono_emergencia":
        validarCampo(
          "suscripcion",
          expresiones.telefono,
          e.target,
          "telefono_emergencia"
        );
        break;
      case "condicionMedica":
        validarRadio(e.target, "condicionMedica");
        break;
      case "medicamento":
        validarRadio(e.target, "medicamento");
        break;
      case "lesion":
        validarRadio(e.target, "lesion");
        break;
      case "alergia":
        validarRadio(e.target, "alergia");
        break;
      case "altura":
        validarCampo("suscripcion", expresiones.general, e.target, "altura");
        break;
      case "peso":
        validarCampo("suscripcion", expresiones.general, e.target, "peso");
        break;
      case "actividad_fisica":
        validarRadio(e.target, "actividad_fisica");
        break;
      case "tipo_membresia":
        validarSelect(e.target, "tipo_membresia");
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
      (camposSuscripcion[campo] = true);
    } else {
      (camposSuscripcion[campo] = false);
    }
  };

  const validarSelect = (select, campo) => {
    if (select.value) {
      camposSuscripcion[campo] = true;
    } else {
      camposSuscripcion[campo] = false;
    }
  };

  inputsSuscripcion.forEach((input) => {
    input.addEventListener("keyup", validarFormularioSuscripcion);
    input.addEventListener("blur", validarFormularioSuscripcion);
  });
  radiosSuscripcion.forEach((radio) => {
    radio.addEventListener("change", validarFormularioSuscripcion);
  });
  selects.forEach((select) => {
    select.addEventListener("change", validarFormularioSuscripcion);
});
 

  formularioSuscripcion.addEventListener("submit", (e) => {
    e.preventDefault();
  
    if (
    camposSuscripcion.nombre &&
    camposSuscripcion.apellido &&
    camposSuscripcion.correo &&
    camposSuscripcion.telefono &&
    camposSuscripcion.direccion &&
    camposSuscripcion.fecha_nacimiento &&
    camposSuscripcion.genero &&
    camposSuscripcion.nombre_emergencia &&
    camposSuscripcion.apellido_emergencia &&
    camposSuscripcion.relacion &&
    camposSuscripcion.telefono_emergencia &&
    camposSuscripcion.condicionMedica &&
    camposSuscripcion.medicamento &&
    camposSuscripcion.lesion &&
    camposSuscripcion.alergia &&
    camposSuscripcion.altura &&
    camposSuscripcion.peso &&
    camposSuscripcion.actividad_fisica &&
    camposSuscripcion.tipo_membresia
  ) {
      formularioSuscripcion.reset();

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

  function toggleInput(radio) {
    const inputDescripcion = radio
      .closest(".suscripcion__formulario-grupo")
      .querySelector(".toggle-input");
    inputDescripcion.disabled = radio.value !== "Si";
  }
