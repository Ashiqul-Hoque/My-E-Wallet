function catchInput(id, err) {
  const inputAmount = document.getElementById(id);
  const inputValue = inputAmount.value;
  const inputNumber = parseFloat(inputValue);
  if (inputNumber < 0) {
    document.getElementById(err).style.display = "block";
  } else {
    document.getElementById(err).style.display = "none";
    return inputNumber;
  }
}

function totalExpenses() {
  let food = catchInput("foodInput", "error2");
  let rent = catchInput("rentInput", "error3");
  let clothes = catchInput("clothesInput", "error4");
  let totalExpenses = food + rent + clothes;
  return totalExpenses;
}
function income() {
  let income = catchInput("incomeInput", "error1");
  return income;
}

function totalBalance() {
  let expenses = totalExpenses();
  let incomeTotal = income();
  let totalbalance = incomeTotal - expenses;
  return totalbalance;
}

const calculateButton = document
  .getElementById("calcButton")
  .addEventListener("click", function () {
    const incomeCall = income();
    const expencCall = totalExpenses();
    const balanceCall = totalBalance();
    const expen = document.getElementById("totalExpen");
    expen.innerText = expencCall;
    const balanceElement = document.getElementById("balance");
    if (expencCall > incomeCall) {
      document.getElementById("error5").style.display = "block";
      balanceElement.innerText = 0;
    } else {
      document.getElementById("error5").style.display = "none";
      balanceElement.innerText = balanceCall;
    }
  });

const saveButton = document
  .getElementById("saveBtn")
  .addEventListener("click", function () {
    const saveInput = document.getElementById("saveInput");
    const saveNumber = saveInput.value;
    const saveInputPercent = parseFloat(saveNumber);
    const saving = document.getElementById("saving");
    const remainBal = document.getElementById("remain");
    if (saveInputPercent > 100 || saveInputPercent < 0) {
      document.getElementById("error6").style.display = "block";
      saving.innerText = 0;
      remainBal.innerText = 0;
    } else {
      document.getElementById("error6").style.display = "none";
      let saveAmount = saveInputPercent / 100;
      let balanc = totalBalance();
      let totalSave = saveAmount * balanc;
      let remainBalance = balanc - totalSave;
      saving.innerText = totalSave;
      remainBal.innerText = remainBalance;
    }
  });
