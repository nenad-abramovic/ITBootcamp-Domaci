const txtDesc = document.querySelector('#txt-desc');
const txtAmount = document.querySelector('#txt-amount');
const selType = document.querySelector('#sel-type');
const btnAddTransaction = document.querySelector('#btn-add');
const tblIncome = document.querySelector('#tbl-income');
const tblExpense = document.querySelector('#tbl-expense');
const txtProfit = document.querySelector('#txt-profit');
const tblIncomeSum = document.querySelector('#tbl-income tfoot tr td:last-child');
const tblExpenseSum = document.querySelector('#tbl-expense tfoot tr td:last-child');
let profit = 0;
let income = 0;
let expense = 0;

btnAddTransaction.addEventListener('click', addTransaction);

function addTransaction() {
  let description = txtDesc.value.trim();
  let amount = txtAmount.value.trim();
  if (description == '') {
    alert('Please provide description.');
    return;
  }
  if (amount == '') {
    alert('Invalid transaction. Amount hasn\'t been provided.');
    return;
  }

  let row = document.createElement('tr');
  let tdDesc = document.createElement('td');
  let tdAmount = document.createElement('td');

  tdDesc.innerHTML = description;
  tdAmount.innerHTML = amount;

  row.appendChild(tdDesc);
  row.appendChild(tdAmount);

  if (selType.value == 'Income') {
    tblIncome.children[1].appendChild(row);
    profit += Number(txtAmount.value);
    income += Number(txtAmount.value);
    txtProfit.innerHTML = profit;
    tblIncomeSum.innerHTML = income;

  } else {
    tblExpense.children[1].appendChild(row);
    profit -= Number(txtAmount.value);
    expense += Number(txtAmount.value);
    txtProfit.innerHTML = profit;
    tblExpenseSum.innerHTML = expense;
  }

  txtProfit.parentElement.style.color = profit >= 0 ? 'green' : 'red';

  txtDesc.value = '';
  txtAmount.value = '';
}
