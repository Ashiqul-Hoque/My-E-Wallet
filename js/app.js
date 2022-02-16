function catchInput(id, error) {
  const inputAmount = document.getElementById(id);
  const inputValue = inputAmount.value;
  const inputNumber = parseFloat(inputValue);
  if (inputNumber < 0) {
    document.getElementById(error).style.display = "block";
  }
  return inputNumber;
}

const claculateButton = document
  .getElementById("calcButton")
  .addEventListener("click", function () {
    const income = catchInput("incomeInput", "error1");
    const food = catchInput("foodInput", "error2");
    const rent = catchInput("rentInput", "error3");
    const clothes = catchInput("clothesInput", "error4");
    let totalExpenses = food + rent + clothes;
    const expen = document.getElementById("totalExpen");
    expen.innerText = totalExpenses;
    const balance = document.getElementById("balance");
    const totalbalance = income - totalExpenses;
    balance.innerText = totalbalance;
  });
