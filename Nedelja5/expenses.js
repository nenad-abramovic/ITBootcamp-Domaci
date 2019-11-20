import Expense from './expense';
import storage from './storage';

let expenses = JSON.parse(storage.getItem('expenses'));

class Expenses {
  constructor() { }
  getExpenses() {
    let html = '<div class="expenses">';
    if (expenses != null)
      expenses.forEach(expense => {
        let item = new Expense(expense.description, expense.amount);
        html += item.getExpense();
      });
    html += "</div>";
    return html;
  }
}

export default Expenses;