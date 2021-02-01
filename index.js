// First Class Ticket Plus Btn
const firstQuantityPlusBtn = document.getElementById("firstQuantityPlus");
firstQuantityPlusBtn.addEventListener("click", function () {
  handlerFirstClassTicket(true);
});

// First Class Ticket Minus Btn
const firstQuantityMinusBtn = document.getElementById("firstQuantityMinus");
firstQuantityMinusBtn.addEventListener("click", function () {
  handlerFirstClassTicket(false);
});

// First Class Ticket increase & Decrease
function handlerFirstClassTicket(isIncrease) {
  const firstClassInput = document.getElementById("firstClassInput");
  const firstInputNum = parseInt(firstClassInput.value);

  // const firstClassNewNum = firstInputNum + 1;

  let firstClassNewNum = firstInputNum;
  if (isIncrease == true) {
    firstClassNewNum = firstInputNum + 1;
  }
  if (isIncrease == false && firstClassNewNum > 0) {
    firstClassNewNum = firstInputNum - 1;
  }
  firstClassInput.value = firstClassNewNum;

  calculateAll();
}

// Economy Ticket Count Plus Btn
const economyQuantityPlusBtn = document.getElementById("economyPlush");
economyQuantityPlusBtn.addEventListener("click", function () {
  handlerEconomyTicket(true);
});

// Economy Ticket Count Minus Btn
const economyQuantityMinusBtn = document.getElementById("economyMinus");
economyQuantityMinusBtn.addEventListener("click", function () {
  handlerEconomyTicket(false);
});

// Economy Ticket increase & Decrease
function handlerEconomyTicket(isIncrease) {
  const economyInput = document.getElementById("economyInput");
  const economyInputNum = parseInt(economyInput.value);

  // const economyNewNum = economyInputNum + 1;
  let economyNewNum = economyInputNum;

  if (isIncrease == true) {
    economyNewNum = economyInputNum + 1;
  }
  if (isIncrease == false && economyNewNum > 0) {
    economyNewNum = economyInputNum - 1;
  }
  economyInput.value = economyNewNum;
  calculateAll();
}

// Calculate All
function calculateAll() {
  const firstClassInput = document.getElementById("firstClassInput");
  const firstInputNum = parseInt(firstClassInput.value);
  const firstClassNewNum = firstInputNum + 1;

  const economyInput = document.getElementById("economyInput");
  const economyInputNum = parseInt(economyInput.value);
  const economyNewNum = economyInputNum + 1;

  // SubTotal
  const subTotal = firstInputNum * 150 + economyInputNum * 100;
  document.getElementById("subTotal").innerText = subTotal;

  //Vat
  const vatTotal = subTotal * (10 / 100);
  document.getElementById("vatAmmount").innerText = vatTotal;

  // total Ammounts
  const totalAmmounts = subTotal + vatTotal;

  document.getElementById("totalAmmounts").innerText = totalAmmounts;
}
