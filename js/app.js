function catchInput(id, err) {
  const inputAmount = document.getElementById(id);
  const inputValue = inputAmount.value;
  const inputNumber = parseFloat(inputValue);
  if (inputNumber < 0) {
    document.getElementById(err).style.display = "block";
  } else {
    return inputNumber;
  }
}
function totalBalance() {
  let income = catchInput("incomeInput", "error1");
  let expenses = totalExpenses();
  let totalbalance = income - expenses;
  return totalbalance;
}

function totalExpenses() {
  let food = catchInput("foodInput", "error2");
  let rent = catchInput("rentInput", "error3");
  let clothes = catchInput("clothesInput", "error4");
  let totalExpenses = food + rent + clothes;
  return totalExpenses;
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
    if (saveInputPercent > 100 || saveInputPercent < 0) {
      document.getElementById("error6").style.display = "block";
    } else {
      let saveAmount = saveInputPercent / 100;
      let balanc = totalBalance();
      let totalSave = saveAmount * balanc;
      let remainBalance = balanc - totalSave;

      const saving = document.getElementById("saving");
      saving.innerText = totalSave;
      const remainBal = document.getElementById("remain");
      remainBal.innerText = remainBalance;
    }
  });
