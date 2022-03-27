const button = document.querySelector("button");
const span = document.querySelector("span");
const p = document.querySelector("p");

async function handleClick() {
  const dadosResponse = await fetch("https://api.adviceslip.com/advice");
  const dadosJSON = await dadosResponse.json();

  span.innerText = dadosJSON.slip.id;
  p.innerText = dadosJSON.slip.advice;
}

button.addEventListener("click", handleClick);
