function catchInput(id) {
  const inputAmount = document.getElementById(id);
  const inputValue = inputAmount.value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}
function totalExpenses() {
  let food = catchInput("foodInput");
  let rent = catchInput("rentInput");
  let clothes = catchInput("clothesInput");
  let totalExpenses = food + rent + clothes;
  return totalExpenses;
}
function totalBalance() {
  let income = catchInput("incomeInput");
  let expenses = totalExpenses();
  let totalbalance = income - expenses;
  return totalbalance;
}
const calculateButton = document
  .getElementById("calcButton")
  .addEventListener("click", function () {
    const expenc = totalExpenses();
    const balance = totalBalance();
    if (expenc > balance) {
      document.getElementById("error5").style.display = "block";
    } else {
      const expen = document.getElementById("totalExpen");
      expen.innerText = expenc;
      const balanceElement = document.getElementById("balance");
      balanceElement.innerText = balance;
    }
  });

const saveButton = document
  .getElementById("saveBtn")
  .addEventListener("click", function () {
    const saveInputPercent = catchInput("saveInput");
    let saveAmount = saveInputPercent / 100;
    let balanc = totalBalance();
    let totalSave = saveAmount * balanc;
    const saving = document.getElementById("saving");
    saving.innerText = totalSave;
    let remainBalance = balanc - totalSave;
    const remainBal = document.getElementById("remain");
    remainBal.innerText = remainBalance;
  });
