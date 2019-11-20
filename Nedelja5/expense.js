import { getPercentage } from './utils';

class Expense {
  constructor(description, amount) {
    this.description = description;
    this.amount = amount;
  }
  getIncome() {
    return `<div class="item-info"><p>${this.description}</p><p>${this.amount}</p><p>${getPercentage(this.amount)}</p></div>`;
  }
}

export default Expense;