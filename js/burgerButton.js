// variables
let menu = document.querySelector(".hamburger");
let linksNav = document.querySelectorAll(".navLink");
console.log(window.innerWidth);
//funciones
//cerrar menu cuando se apretan links
const closeMenu = () => {
  document.querySelector("nav").classList.remove("is_active");
  menu.classList.remove("is-active");
};
//cambiar como se ve la hamburguesa y mostrar/ocultar el menu cuando se apreta en boton hamburgersa
function toggleMenu(event) {
  this.classList.toggle("is-active");
  document.querySelector("nav").classList.toggle("is_active");
  event.preventDefault();
}
//En caso de tener el menu hamburgesa abierto si la pantalla excede los 768px dejar de mostrar el nav (quitarle la clase is_active)
const screenWidth = () => {
  if (window.innerWidth > 992) {
    closeMenu();
  }
};

// event
menu.addEventListener("click", toggleMenu, false);
linksNav.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
window.addEventListener("resize", screenWidth);
