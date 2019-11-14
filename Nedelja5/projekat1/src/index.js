
class Ledger {

  static profit = 0;
  static transactions = [];

  static makeTransaction(transaction) {
    this.transactions.push(transaction);
    if (transaction.type = 'Income') {
      this.profit += transaction.amount;
    } else {
      this.profit -= transaction.amount;
    }
  }

  static getTotalIncome() {
    return this.incomes.reduce((acc, current) => acc + current.amount, 0);
  }
  static getTotalExpenses() {
    return this.expenses.reduce((acc, current) => acc + current.amount, 0)
  }
}

class Transaction {
  constructor(description, amount, type) {
    this.description = description.trim();
    this.amount = Number(amount.trim());
    this.type = type;
  }
}

const txtDesc = document.querySelector('#txt-desc');
const txtAmount = document.querySelector('#txt-amount');
const selType = document.querySelector('#sel-type');
const btnAddTransaction = document.querySelector('#btn-add');
const tblIncome = document.querySelector('#tbl-income');
const tblExpense = document.querySelector('#tbl-expense');
const txtProfit = document.querySelector('#txt-profit');
const tblIncomeSum = document.querySelector('#tbl-income tfoot tr td:last-child');
const tblExpenseSum = document.querySelector('#tbl-expense tfoot tr td:last-child');

btnAddTransaction.addEventListener('click', addTransaction);

function addTransaction() {
  let transaction = new Transaction(txtDesc.value, txtAmount.value, selType.value);
  if (transaction.description == '') {
    alert('Please provide description.');
    return;
  }
  if (transaction.amount == '') {
    alert('Invalid transaction. Amount hasn\'t been provided.');
    return;
  }

  let row = document.createElement('tr');
  let tdDesc = document.createElement('td');
  let tdAmount = document.createElement('td');

  tdDesc.innerHTML = transaction.description;
  tdAmount.innerHTML = transaction.amount;

  row.appendChild(tdDesc);
  row.appendChild(tdAmount);

  Ledger.makeTransaction(transaction);
  txtProfit.innerHTML = Ledger.profit;

  if (transaction.type == 'Income') {
    tblIncome.children[1].appendChild(row);
    tblIncomeSum.innerHTML = Ledger.getTotalIncome();
  } else {
    tblExpense.children[1].appendChild(row);
    tblExpenseSum.innerHTML = Ledger.getTotalExpenses();
  }

  txtProfit.parentElement.style.color = profit >= 0 ? 'green' : 'red';

  txtDesc.value = '';
  txtAmount.value = '';
}
