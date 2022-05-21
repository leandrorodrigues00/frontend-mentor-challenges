const amountInput = document.querySelector(".info-bill-value");
const peopleInput = document.querySelector(".info-bill-people");
const customInput = document.querySelector(".custom");
const resetButton = document.querySelector(".reset");

const numberPeopleError = document.querySelector("#error-people");

const tips = document.querySelectorAll("li");

const totalTip = document.querySelector("#tip-amount");
const totalPerson = document.querySelector("#total-person-amount");

resetButton.addEventListener("click", () => {
  amountInput.value = 0;
  peopleInput.value = 0;
  totalTip.innerHTML = `$ 0.00`;
  totalPerson.innerHTML = `$ 0.00`;
});

function peopleNumberInput() {
  let numberPerson = +peopleInput.value;
  return numberPerson;
}

function totalAmount() {
  let totalAmount = +amountInput.value;
  return totalAmount;
}

function activeTab(index) {
  tips.forEach((tip) => {
    tip.classList.remove("active");
  });

  if (index !== 5) {
    tips[index].classList.add("active");
  }
}

let tipValue;
let formattedTip = 0;
tips.forEach((tip, index) => {
  tip.addEventListener("click", () => {
    activeTab(index);
    tipValue = tip.innerText.replace("%", "");
    formattedTip = +tipValue / 100;
  });
});

amountInput.addEventListener("change", () => {
  let numberPerson = peopleNumberInput();

  let totalAmount = +amountInput.value;

  if (numberPerson > 0) {
    let billValue = (+amountInput.value * +formattedTip) / numberPerson;

    totalTip.innerHTML = `$ ${billValue.toFixed(2)}`;
    totalPerson.innerHTML = `$ ${(totalAmount + billValue).toFixed(2)}`;
  }

  if (numberPerson === 0) {
    numberPeopleError.classList.add("error");
    peopleInput.classList.add("errorPeople");
  } else {
    numberPeopleError.classList.remove("error");
  }
});
peopleInput.addEventListener("change", () => {
  let numberPerson = +peopleInput.value;

  let totalAmount2 = totalAmount();

  if (numberPerson > 0) {
    let billValue = (+amountInput.value * +formattedTip) / numberPerson;
    totalTip.innerHTML = `$ ${billValue.toFixed(2)}`;
    totalPerson.innerHTML = `$ ${(totalAmount2 + billValue).toFixed(2)}`;
  }
  if (numberPerson === 0) {
    numberPeopleError.classList.add("error");
    peopleInput.classList.add("errorPeople");
  } else {
    numberPeopleError.classList.remove("error");
    peopleInput.classList.remove("errorPeople");
  }
});

tips.forEach((tip) => {
  tip.addEventListener("click", () => {
    let numberPerson = peopleNumberInput();

    let totalAmount2 = totalAmount();
    if (numberPerson > 0) {
      let billValue = (+amountInput.value * +formattedTip) / numberPerson;
      totalTip.innerHTML = `$ ${billValue.toFixed(2)}`;
      totalPerson.innerHTML = `$ ${(totalAmount2 + billValue).toFixed(2)}`;
    }
    if (numberPerson === 0) {
      let billValue = +amountInput.value * +formattedTip;
      totalTip.innerHTML = `$ ${billValue.toFixed(2)}`;

      totalPerson.innerHTML = `$ ${(totalAmount2 + billValue).toFixed(2)}`;
    }
  });
});

customInput.addEventListener("change", () => {
  customInput.style.textAlign = "end";
  let customInputNumber = +customInput.value / 100;

  let numberPerson = peopleNumberInput();

  let totalAmount2 = totalAmount();

  if (numberPerson > 0) {
    let billValue = (+amountInput.value * +customInputNumber) / numberPerson;
    totalTip.innerHTML = `$ ${billValue.toFixed(2)}`;
    totalPerson.innerHTML = `$ ${(totalAmount2 + billValue).toFixed(2)}`;
  }
  if (numberPerson === 0) {
    let billValue = +amountInput.value * +customInputNumber;
    totalTip.innerHTML = `$ ${billValue.toFixed(2)}`;

    totalPerson.innerHTML = `$ ${(totalAmount2 + billValue).toFixed(2)}`;
  }
});
