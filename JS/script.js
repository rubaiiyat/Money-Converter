function updateInput(inputvalue) {
  const inputNum = document.getElementById(inputvalue);
  const inputText = inputNum.value;
  const inputFloat = parseFloat(inputText);
  return inputFloat;
}

document
  .getElementById("income-calculate-btn")
  .addEventListener("click", function () {
    const totalIncome = updateInput("total-income-input");

    const foodCostInput = updateInput("food-cost-input");

    const rentCostInput = updateInput("rent-cost-input");

    const clothesCostInput = updateInput("clothes-cost-input");

    const totalExpenses = document.getElementById("total-expenses");
    const totalBalacne = document.getElementById("rest-balance");

    const errorField = document.getElementById("error-field");

    if (isNaN(totalIncome)) {
      errorField.style.display = "block";
      errorField.innerText =
        "Error! Please Enter Positive Number In Income Field";
    } else if (isNaN(foodCostInput)) {
      errorField.style.display = "block";
      errorField.innerText =
        "Error! Please Enter Positive Number In Food Cost Field";
    } else if (isNaN(rentCostInput)) {
      errorField.style.display = "block";
      errorField.innerText =
        "Error! Please Enter Positive Number In Rent Cost Field";
    } else if (isNaN(clothesCostInput)) {
      errorField.style.display = "block";
      errorField.innerText =
        "Error! Please Enter Positive Number In Clothes Cost Field";
    } else if (
      totalIncome < 1 ||
      foodCostInput < 1 ||
      rentCostInput < 1 ||
      clothesCostInput < 1
    ) {
      errorField.style.display = "block";
      errorField.innerText = "Error! Please enter number greater than 0";
    } else if (foodCostInput + rentCostInput + clothesCostInput > totalIncome) {
      errorField.style.display = "block";
      errorField.innerText =
        "SORRY! Expenses cost more than your total income. Total income should be input more than expenses";
    } else {
      errorField.style.display = "none";
      const totalExpensesSum = foodCostInput + rentCostInput + clothesCostInput;
      totalExpenses.innerText = totalExpensesSum;

      const totalBalacneSum = totalIncome - totalExpensesSum;
      totalBalacne.innerText = totalBalacneSum;
    }
  });

/* function updateBalance() {
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
  }); */
