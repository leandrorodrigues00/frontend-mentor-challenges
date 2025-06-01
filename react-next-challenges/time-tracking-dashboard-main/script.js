const currentHours = document.querySelectorAll(".card-body h1");
const previousHours = document.querySelectorAll(".card-body span");

const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monthly = document.querySelector("#monthly");

async function fetchJson() {
  const dadosResponse = await fetch("data.json");
  const dadosJSON = await dadosResponse.json();
  return dadosJSON;
}

function removeHighlights() {
  daily.classList.remove("active");
  weekly.classList.remove("active");
  monthly.classList.remove("active");
}

/* ________ Change the time period to  day _________ */

daily.addEventListener("click", async () => {
  dadosJSON = await fetchJson();

  currentHours.forEach((element, index) => {
    element.innerHTML = `${dadosJSON[index].timeframes.daily.current}hrs`;
  });

  previousHours.forEach((element, index) => {
    element.innerHTML = `Last Week - ${dadosJSON[index].timeframes.daily.previous}hrs`;
  });

  removeHighlights();
  daily.classList.add("active");
});

/* ________ Change the time period to month_________ */

monthly.addEventListener("click", async () => {
  dadosJSON = await fetchJson();

  currentHours.forEach((element, index) => {
    element.innerHTML = `${dadosJSON[index].timeframes.monthly.current}hrs`;
  });

  previousHours.forEach((element, index) => {
    element.innerHTML = `Last Week - ${dadosJSON[index].timeframes.monthly.previous}hrs`;
  });

  removeHighlights();
  monthly.classList.add("active");
});

/* ________ Change the time period to week_________ */

weekly.addEventListener("click", changeTimeToWeekly);

async function changeTimeToWeekly() {
  dadosJSON = await fetchJson();

  currentHours.forEach((element, index) => {
    element.innerHTML = `${dadosJSON[index].timeframes.weekly.current}hrs`;
  });

  previousHours.forEach((element, index) => {
    element.innerHTML = `Last Week - ${dadosJSON[index].timeframes.weekly.previous}hrs`;
  });

  removeHighlights();
  weekly.classList.add("active");
}

/* ________ First fill in the data when loading the site _________ */

changeTimeToWeekly();
