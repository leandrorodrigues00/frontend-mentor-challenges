const btn = document.querySelector("button");
const principal = document.querySelector(".container");
const secundario = document.querySelector(".thanks");
const buttonMenu = document.querySelectorAll("[data-value]");

const numberStar = document.querySelector(".number-star-seleced");

let selectedRating = null;

btn.addEventListener("click", handleChange);

function handleChange() {
  selectedRating = value;
  if (!selectedRating) {
    return alert("Please select number rating!");
  }

  principal.classList.toggle("ativo");
  secundario.classList.toggle("ativo");
}

let value = 0;

buttonMenu.forEach((index) => {
  index.addEventListener("click", () => {
    buttonMenu.forEach((index) => index.classList.remove("active"));
    value = index.dataset.value;
    index.classList.add("active");
    numberStar.innerHTML = `${value}`;
  });
});
