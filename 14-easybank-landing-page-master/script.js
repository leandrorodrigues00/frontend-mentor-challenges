const menu = document.querySelector(".hamburger-menu");
const menuOpen = document.querySelector(".hamburger-menu div");

const menuInfos = ["Home", "About", "Contact", "Blog", "Careers"];

menuInfos.forEach((info) => {
  const link = document.createElement("a");

  link.innerText = info;

  menuOpen.appendChild(link);
});

menu.addEventListener("click", () => {
  menuOpen.classList.toggle("open-menu");
});
