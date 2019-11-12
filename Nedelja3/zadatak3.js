const counterID = '#counter';
const messageID = '#message';
const orderBtnClass = '.btn-order';
const orderNowBtnClass = '.btn-order-now';
const counter = document.querySelector(counterID);
const message = document.querySelector(messageID);
let orderButtons = document.querySelectorAll(orderBtnClass);
let orderNowButtons = document.querySelectorAll(orderNowBtnClass);
let orderCount = 0;

orderButtons.forEach(button => {
  button.addEventListener('click', function () {
    counter.innerHTML = ++orderCount;
  });
});

orderNowButtons.forEach(button => {
  button.addEventListener('click', function () {
    let success = `Наручили сте [${orderCount}] ${pizzaSuffix()}, ${getDateAndTime()}`;
    let error = `Наручивање неуспешно! Нисте одабрали ни једну пицу.`;
    let msg = orderCount == 0 ? error : success;
    let msgColor = `${orderCount == 0 ? 'red' : 'green'}`;
    message.style.color = msgColor;
    message.innerHTML = `<p>${msg}</p>`;
    orderCount = 0;
    counter.innerHTML = orderCount;
  });
});

function pizzaSuffix() {
  if (orderCount > 10 && orderCount < 20) {
    return `пица`;
  }
  if (orderCount.toString().endsWith('1')) {
    return `пицу`;
  }
  if (orderCount.toString().match(/(2|3|4)$/)) {
    return `пице`;
  }
  else {
    return `пица`;
  }
}

function getDateAndTime() {
  return `[ ${getCurrentDate()} ${getCurrentTime()} ]`;
}

function getCurrentDate() {
  let date = new Date();
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

function getCurrentTime() {
  let date = new Date();
  let hours = date.getHours().toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');
  let seconds = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}
