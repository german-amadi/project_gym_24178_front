export const validarCampoInput = (form, expresion, input, campo, campos) => {
  const grupoDiv = document.getElementById(`${form}__formulario-${campo}`);

  if (expresion.test(input.value)) {
    grupoDiv.classList.remove("activo");
    campos[campo] = true;
  } else {
    grupoDiv.classList.add("activo");
    campos[campo] = false;

    setTimeout(() => {
      grupoDiv.classList.remove("activo");
    }, 3000);
  }
};

export function toggleInput(radio) {
  const inputDescripcion = radio
    .closest(".suscripcion__formulario-grupo")
    .querySelector(".toggle-input");
  inputDescripcion.disabled = radio.value !== "Si";
}

export function validarCamposRadio(form, radioGroups) {
  let todosValidados = true;

  radioGroups.forEach((group) => {
    const radios = document.getElementsByName(group);
    const grupoDiv = document.getElementById(`${form}__formulario-${group}`);
    if (![...radios].some((radio) => radio.checked)) {
      grupoDiv.classList.add("activo");
      todosValidados = false;
    } else {
      grupoDiv.classList.remove("activo");
    }
    setTimeout(() => {
      radioGroups.forEach((group) => {
        const grupoDiv = document.getElementById(
          `${form}__formulario-${group}`
        );
        grupoDiv.classList.remove("activo");
      });
    }, 3000);
  });

  return todosValidados;
}

export function validarCamposSelect(form, camposSelect) {
  let todosValidados = true;

  camposSelect.forEach((name) => {
    const select = document.querySelector(`select[name="${name}"]`);
    const grupoDiv = select.closest(`.${form}__formulario-grupo`);

    if (select.value === "Seleccione uno") {
      grupoDiv.classList.add("activo");
      todosValidados = false;
    } else {
      grupoDiv.classList.remove("activo");
    }
  });

  setTimeout(() => {
    camposSelect.forEach((name) => {
      const select = document.querySelector(`select[name="${name}"]`);
      const grupoDiv = select.closest(`.${form}__formulario-grupo`);
      grupoDiv.classList.remove("activo");
    });
  }, 3000);

  return todosValidados;
}

export const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  consulta: /^[a-zA-ZÀ-ÿ\s]{5,40}$/,
  general: /^[a-zA-ZÀ-ÿ0-9\s]{1,40}$/,
  fechaNacimiento: /.+/,
};
