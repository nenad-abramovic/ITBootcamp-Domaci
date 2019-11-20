import storage from './storage';

let incomes = JSON.parse(storage.getItem('incomes'));
let totalIncome = 1; // incomes.reduce((acc, income) => acc + income.amount, 0);

let getPercentage = (amount) => {
  return `${Math.round((amount / totalIncome) * 100)}%`;
}

export { getPercentage };