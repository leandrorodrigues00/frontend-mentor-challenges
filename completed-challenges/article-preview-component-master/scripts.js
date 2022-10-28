const button = document.querySelector(".shareContainer");
const arrowEffect = document.querySelector(".shareImg");
const menu = document.querySelector(".social-menu");

button.addEventListener("click", handleOpenMenu);

function handleOpenMenu() {
  menu.classList.toggle("toogleRemove");
  arrowEffect.classList.toggle("activeButton");
}
