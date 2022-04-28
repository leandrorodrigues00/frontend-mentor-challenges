const berger = document.getElementsByClassName("burger")[0];
const links = document.getElementsByClassName("links")[0];
const close = berger.getElementsByTagName("img")[0];

const background = document.createElement("div");

console.log(close.src.includes("icon-hamburger.svg"));

berger.onclick = () => {
  if (document.body.lastElementChild.className === "background") {
    document.body.removeChild(background);
  } else {
    background.className = "background";
    document.body.appendChild(background);
  }

  if (close.src.includes("icon-hamburger.svg")) {
    close.src = "images/icon-close.svg";
  } else {
    close.src = "images/icon-hamburger.svg";
  }

  links.classList.toggle("active");
};
