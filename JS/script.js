// Main Function
function updateInput(inputvalue) {
  const inputNum = document.getElementById(inputvalue);
  const inputText = inputNum.value;
  const inputFloat = parseFloat(inputText);
  return inputFloat;
}

// Calculate Income
document
  .getElementById("income-calculate-btn")
  .addEventListener("click", function () {
    // main Income ID
    const totalIncome = updateInput("total-income-input");

    // FoodCost ID
    const foodCostInput = updateInput("food-cost-input");

    // Rent Cost ID
    const rentCostInput = updateInput("rent-cost-input");

    // Clothes Cost ID
    const clothesCostInput = updateInput("clothes-cost-input");

    // Total Expenses AND Total Balance ID
    const totalExpenses = document.getElementById("total-expenses");
    const totalBalacne = document.getElementById("rest-balance");

    // Error Massege ID
    const errorField = document.getElementById("error-field");

    // Condition
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
      // Total Calculate here
      errorField.style.display = "none";
      const totalExpensesSum = foodCostInput + rentCostInput + clothesCostInput;
      totalExpenses.innerText = totalExpensesSum;

      const totalBalacneSum = totalIncome - totalExpensesSum;
      totalBalacne.innerText = totalBalacneSum;
    }
  });

// Save Money and Remaining Money
document.getElementById("save-btn").addEventListener("click", function () {
  // Rest Balacne ID
  const restBalacne = document.getElementById("rest-balance").innerText;

  // Input Parcentange ID
  const saveInput = document.getElementById("save-input");
  const saveInputValue = parseFloat(saveInput.value);
  saveInput.value = saveInputValue;

  // Save Amount AND Remaining Amount Input ID
  const savingAmount = document.getElementById("saving-amount");
  const remainingBalance = document.getElementById("remaining-balance");

  // Total save and remaining CALCULATION
  const totalSavingAmount = (saveInputValue / 100) * restBalacne;
  const totalRemainingBalacne = restBalacne - totalSavingAmount;

  // Error Massege
  const errorField = document.getElementById("save-error");

  // Condition
  if (isNaN(saveInputValue)) {
    errorField.style.display = "block";
    errorField.innerText =
      "Error! Please Enter Positive Number Saving Input Field";
  } else if (restBalacne < 1) {
    errorField.style.display = "block";
    errorField.innerText =
      "SORRY! Your Amount is 00, So you can't convert your money";
  } else if (saveInputValue < 1) {
    errorField.style.display = "block";
    errorField.innerText = "Error! Please enter number greater than 0";
  } else if (saveInputValue > restBalacne) {
    errorField.style.display = "block";
    errorField.innerText = "SORRY! Parcentage is more than your Rest Balacne.";
  } else {
    errorField.style.display = "none";
    savingAmount.innerText = totalSavingAmount;
    remainingBalance.innerText = totalRemainingBalacne;
  }
});
