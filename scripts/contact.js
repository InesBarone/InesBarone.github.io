//CONTACTO
const inputSoloTexto = document.getElementById("solo-texto");
const aviso = document.querySelector(".avisos.text");
const inputEmail = document.getElementById("email");
const caracteres = document.querySelector(".textarea");
const mensaje = document.getElementById("mensaje");
const avisoEmail = document.querySelector(".avisos.email");

inputSoloTexto.addEventListener("blur", () => {
  const regEx = /^[A-Z]+$/i;
  if (regEx.test(inputSoloTexto.value) != true) {
    aviso.innerHTML = '* El "texto dato" debe solo contener letras';
  } else {
    aviso.innerHTML = "";
  }
});

inputEmail.addEventListener("blur", () => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (re.test(inputEmail.value) != true) {
    avisoEmail.innerHTML = "* No es correcto el email ingresado";
  } else {
    avisoEmail.innerHTML = "";
  }
});

mensaje.addEventListener("input", (e) => {
  const target = e.target;
  const longitudMax = 255;
  const longitudAct = target.value.length;
  caracteres.innerHTML = `Caracteres: ${longitudAct}/255`;
});
