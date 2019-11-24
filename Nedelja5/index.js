const txtTitle = document.querySelector('#txt-title');
const txtProfit = document.querySelector('#txt-profit');
const txtTotalIncome = document.querySelector('#txt-total-income');
const txtTotalExpense = document.querySelector('#txt-total-expense');
const expensePercent = document.querySelector('#expense-percent');
const txtValid = document.querySelector('#txt-valid');
const txtType = document.querySelector('#txt-type');
const txtDesc = document.querySelector('#txt-desc');
const txtAmount = document.querySelector('#txt-amount');
const btnAdd = document.querySelector('#btn-add');
const incomesList = document.querySelector('.incomes');
const expensesList = document.querySelector('.expenses');

let profit = 0;
let totalIncome = 0;
let totalExpense = 0;
let transactions = localStorage.getItem('transactions');

if (transactions == 'null') {
  transactions = [];
  updateHeader();
}
else {

  transactions = JSON.parse(transactions);
  transactions.forEach(transaction => {
    let item = document.createElement('div');
    item.addEventListener('mouseover', (e) => {
      if (e.target.tagName == 'DIV')
        e.target.children[2].style.visibility = 'visible';
      else if (e.target.tagName == 'SPAN')
        e.target.nextElementSibling.style.visibility = 'visible';

    });
    item.addEventListener('mouseleave', (e) => {
      if (e.target.tagName == 'DIV')
        e.target.children[2].style.visibility = 'hidden';
      else if (e.target.tagName == 'SPAN')
        e.target.nextElementSibling.style.visibility = 'hidden';
    });

    let spDesc = document.createElement('span');
    spDesc.textContent = transaction.desc;

    let spAmount = document.createElement('span');
    spAmount.className = 'sp-amount';
    spAmount.textContent = formatCurrency(transaction.amount);

    let removeBtn = document.createElement('button');
    removeBtn.className = 'rm-btn';
    removeBtn.id = transaction.id;
    removeBtn.textContent = 'Х';
    removeBtn.style.visibility = 'hidden';
    removeBtn.addEventListener('click', (e) => {
      let transaction = transactions.find(tr => tr.id == removeBtn.id);
      transaction.type == 'Income' ? totalIncome -= transaction.amount : totalExpense -= transaction.amount;
      updateHeader();

      transactions = transactions.filter(tr => tr.id != removeBtn.id);
      localStorage.setItem('transactions', JSON.stringify(transactions));

      e.target.parentElement.remove();
    })


    item.appendChild(spDesc);
    item.appendChild(spAmount);
    item.appendChild(removeBtn);


    if (transaction.type == 'Income') {
      totalIncome += transaction.amount;
      incomesList.appendChild(item);
    } else {
      totalExpense += transaction.amount;
      let spPercent = document.createElement('span');
      item.appendChild(spPercent);
      expensesList.appendChild(item);
    }

    txtValid.textContent = 'Претходне трансакције успешно учитане!';
  });
  updateHeader();
}


const gen = function* () {
  let i = transactions.reduce((acc, n) => acc > Number(n.id.slice(3)) ? acc : Number(n.id.slice(3)), 0);
  while (true) {
    yield `Tr:${++i}`;
  }
}
const setID = gen();

let date = new Date();
txtTitle.textContent = `Доступан буџет у ${getMonthName(date.getMonth())} ${date.getFullYear()}:`;
function getMonthName(month) {
  switch (month) {
    case 0: return 'Јануару';
    case 1: return 'Фебруару';
    case 2: return 'Марту';
    case 3: return 'Априлу';
    case 4: return 'Мају';
    case 5: return 'Јуну';
    case 6: return 'Јулу';
    case 7: return 'Августу';
    case 8: return 'Септембру';
    case 9: return 'Октобру';
    case 10: return 'Новембру';
    case 11: return 'Децембру';
    default: console.log('Неисправан унос!');
  }
}

btnAdd.addEventListener('click', (e) => {
  let trType = txtType.value;
  let trDesc = txtDesc.value.trim();
  let trAmount = Number(txtAmount.value.replace(/[,]/g, '')) * 100;
  if (trDesc == '') {
    return txtValid.textContent = 'Опис не сме бити празан!';
  }
  if (!txtAmount.checkValidity() || trAmount == '' || trAmount == 0) {
    return txtValid.textContent = 'Унесен неважећи износ!';
  }

  let transaction = {
    id: setID.next().value,
    desc: trDesc,
    amount: trAmount,
    type: trType
  };
  transactions.push(transaction);

  let item = document.createElement('div');
  item.addEventListener('mouseover', (e) => {
    if (e.target.tagName == 'DIV')
      e.target.children[2].style.visibility = 'visible';
    else if (e.target.tagName == 'SPAN')
      e.target.nextElementSibling.style.visibility = 'visible';

  });
  item.addEventListener('mouseleave', (e) => {
    if (e.target.tagName == 'DIV')
      e.target.children[2].style.visibility = 'hidden';
    else if (e.target.tagName == 'SPAN')
      e.target.nextElementSibling.style.visibility = 'hidden';
  });

  let spDesc = document.createElement('span');
  spDesc.textContent = trDesc;

  let spAmount = document.createElement('span');
  spAmount.className = 'sp-amount';
  spAmount.textContent = formatCurrency(trAmount);

  let removeBtn = document.createElement('button');
  removeBtn.className = 'rm-btn';
  removeBtn.id = transaction.id;
  removeBtn.textContent = 'Х';
  removeBtn.style.visibility = 'hidden';
  removeBtn.addEventListener('click', (e) => {
    let transaction = transactions.find(tr => tr.id == removeBtn.id);
    transaction.type == 'Income' ? totalIncome -= transaction.amount : totalExpense -= transaction.amount;
    updateHeader();

    transactions = transactions.filter(tr => tr.id != removeBtn.id);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    e.target.parentElement.remove();
  })


  item.appendChild(spDesc);
  item.appendChild(spAmount);
  item.appendChild(removeBtn);


  if (trType == 'Income') {
    totalIncome += trAmount;
    incomesList.appendChild(item);
  } else {
    let spPercent = document.createElement('span');
    totalExpense += trAmount;
    item.appendChild(spPercent);
    expensesList.appendChild(item);
  }

  updateHeader();
  localStorage.setItem('transactions', JSON.stringify(transactions));
  txtValid.textContent = 'Унос успешан!';

});


function formatCurrency(amount) {
  return `${(amount / 100).toLocaleString('sr-Cyrl', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} РСД`;
}

function formatPercentage(percentage) {
  if (isNaN(percentage)) return '0%';
  return `${percentage.toLocaleString('sr-Cyrl', { style: 'percent', maximumFractionDigits: 0 })}`
}

function updateHeader() {
  txtTotalIncome.textContent = formatCurrency(totalIncome);
  txtTotalExpense.textContent = formatCurrency(totalExpense);
  expensePercent.textContent = formatPercentage(totalExpense / totalIncome);

  profit = totalIncome - totalExpense;
  txtProfit.textContent = formatCurrency(profit);
}