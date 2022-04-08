function updateBalance() {
  // Total Food Cost
  const foodCostInput = document.getElementById("food-cost-input");
  const foodCostValue = parseFloat(foodCostInput.value);

  // Total Rent Cost
  const rentCostInput = document.getElementById("rent-cost-input");
  const rentCostValue = parseFloat(rentCostInput.value);

  // Total Clothes Cost
  const clothesCostInput = document.getElementById("clothes-cost-input");
  const clothesCostValue = parseFloat(clothesCostInput.value);

  //    Total Expenses
  const totalExpensesValue = document.getElementById("total-expenses");
  const totalExpensesText = parseFloat(totalExpensesValue.innerText);
  const totalExpenses = foodCostValue + rentCostValue + clothesCostValue;

  totalExpensesValue.innerText = totalExpenses;

  // Total Income
  const totalIncomeInput = document.getElementById("total-income-input");
  const totalIncomeValue = parseFloat(totalIncomeInput.value);

  // Rest Balance
  const restBalanceValue = document.getElementById("rest-balance");
  const restBalanceText = parseFloat(restBalanceValue.innerText);
  const restTotalBalance = totalIncomeValue - totalExpenses;
  restBalanceValue.innerText = restTotalBalance;

  // Saving
}

document
  .getElementById("income-calculate-btn")
  .addEventListener("click", function () {
    updateBalance();
  });
