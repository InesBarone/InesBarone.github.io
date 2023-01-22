//MODAL
const ingresarButton = document.querySelector(".general-nav-button");
const modal = document.querySelector(".modal");
const volverAtras = document.querySelector("registrar-botones-izquierda");
const cruz = document.querySelector(".cruz-registrar");
const flechaEmpresa = document.querySelector(".carta-registro-flecha.emp");
const flechaOrganizacion = document.querySelector(".carta-registro-flecha.org");

const obtenerButtonText = () => {
  const texto = localStorage.getItem("botonTexto");
  if (texto === null) {
    ingresarButton.innerHTML = "INGRESAR";
  } else {
    ingresarButton.innerHTML = texto;
  }
};

obtenerButtonText();

volverAtras.addEventListener("click", () => {
  modal.classList.remove("modal-open");
  localStorage.setItem("botonTexto", ingresarButton.innerHTML);
});

ingresarButton.addEventListener("click", () => {
  modal.classList.add("modal-open");
});

cruz.addEventListener("click", () => {
  modal.classList.remove("modal-open");
  localStorage.setItem("botonTexto", ingresarButton.innerHTML);
});

flechaEmpresa.addEventListener("click", () => {
  modal.classList.remove("modal-open");
  ingresarButton.innerHTML = "HOLA EMPRESA";
  localStorage.setItem("botonTexto", ingresarButton.innerHTML);
});

flechaOrganizacion.addEventListener("click", () => {
  modal.classList.remove("modal-open");
  ingresarButton.innerHTML = "HOLA ORGANIZACIÓN";
  localStorage.setItem("botonTexto", ingresarButton.innerHTML);
});
