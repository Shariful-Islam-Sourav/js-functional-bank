function getInputValue(inputId) {
  const userInput = document.getElementById(inputId);
  const inputValueText = userInput.value;
  const inputValue = parseFloat(inputValueText);
  userInput.value = "";
  return inputValue;
}
function updateTotalValue(totalId, amount) {
  const userValue = document.getElementById(totalId);
  const totalValueText = userValue.innerText;
  const totalValue = parseFloat(totalValueText);
  userValue.innerText = amount + totalValue;
}
function currentBalance() {
  const userBalance = document.getElementById("balance-value");
  const userBalanceText = userBalance.innerText;
  const totalBalace = parseFloat(userBalanceText);
  return totalBalace;
}
function updateBalance(amount, isTrue) {
  const userBalance = document.getElementById("balance-value");
  const previousTotalBalance = currentBalance();
  if (isTrue == true) {
    userBalance.innerText = previousTotalBalance + amount;
  } else {
    userBalance.innerText = previousTotalBalance - amount;
  }
}
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
      updateTotalValue("deposite-value", depositAmount);
      updateBalance(depositAmount, true);
    }
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmount = getInputValue("withdraw-input");
    const previousTotalBalance = currentBalance();

    if (previousTotalBalance >= withdrawAmount && withdrawAmount > 0) {
      updateTotalValue("withdraw-value", withdrawAmount);
      updateBalance(withdrawAmount, false);
    }
    if (previousTotalBalance < withdrawAmount) {
      alert("You don't have enough money to withdraw!");
    }
  });
