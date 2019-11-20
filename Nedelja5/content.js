import Incomes from './incomes';
import Expenses from './expenses';

class Content {
  constructor() { }
  getContent() {
    let incomes = new Incomes();
    let expenses = new Expenses();
    let html = '<div class="data">';
    html += incomes.getIncomes();
    html += expenses.getExpenses();
    html += '</div>';
    return html;
  }
}

export default Content;