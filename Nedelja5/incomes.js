import Income from './income';
import storage from './storage';

let incomes = JSON.parse(storage.getItem('incomes'));

class Incomes {
  constructor() { }
  getIncomes() {
    let html = '<div class="incomes">';
    if (incomes != null)
      incomes.forEach(income => {
        let item = new Income(income.description, income.amount);
        html += item.getIncome();
      });
    html += "</div>";
    return html;
  }
}

export default Incomes;