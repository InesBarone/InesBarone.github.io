//CARROUSEL
const punto = document.querySelectorAll(".puntos-li");
const contenedorGrande = document.querySelector(".carrousel-completo");

punto.forEach((cadaPunto, i) => {
  punto[i].addEventListener("click", () => {
    let posicion = i;
    let operacion = posicion * -33.33;
    console.log(operacion);

    contenedorGrande.style.transform = `translateX(${operacion}%)`;

    punto.forEach((cadaPunto, i) => {
      punto[i].classList.remove("activo");
    });
    punto[i].classList.add("activo");
  });
});
