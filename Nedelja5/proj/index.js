
class Ledger {

  static numberOfTransactions = 0;
  static totalIncome = 0;
  static totalExpense = 0;
  static transactions = [];

  static makeTransaction(transaction) {
    this.transactions.push(transaction);
    this.numberOfTransactions++;
    if (transaction.type == 'Income') {
      this.totalIncome += transaction.amount;
    } else {
      this.totalExpense += transaction.amount;
    }
  }

  static removeTransaction(transactionID) {
    let idx = this.transactions.findIndex(tr => tr.ID == transactionID);
    this.transactions.splice(idx, 1);
  }

  static getProfit() {
    return this.totalIncome - this.totalExpense;
  }
}

class Transaction {
  constructor(description, amount, type) {
    this.ID = Ledger.numberOfTransactions;
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
  txtProfit.innerHTML = Ledger.getProfit();

  if (transaction.type == 'Income') {
    tblIncome.children[1].appendChild(row);
    tblIncomeSum.innerHTML = Ledger.totalIncome;
  } else {
    tblExpense.children[1].appendChild(row);
    tblExpenseSum.innerHTML = Ledger.totalExpense;
  }

  txtProfit.parentElement.style.color = Ledger.getProfit() >= 0 ? 'green' : 'red';

  txtDesc.value = '';
  txtAmount.value = '';
}
