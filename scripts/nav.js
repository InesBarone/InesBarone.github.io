//NAV
const burger = document.querySelector("#burguer");
const ul = document.querySelector(".nav-ul-contenedor");

burger.addEventListener("click", () => {
  if (burger.classList.contains("active")) {
    burger.classList.remove("active");
    ul.style.display = "none";
  } else {
    burger.classList.add("active");
    ul.style.display = "block";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 730) {
    ul.style.display = "block";
  }
});
