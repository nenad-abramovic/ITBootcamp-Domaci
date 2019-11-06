// 1. задатак
// Написати функцију која враћа максимум од 3 броја (уносе се 3 броја)

function maxOfThreeNumbers(a, b, c) {
  if (a < b) {
    if (b < c) return c;
    else return b;
  } else {
    if (a < c) return c;
    else return a;
  }
  // return -Math.min(-a, -b, -c);
}

console.log(`Максимум бројева 3, 5 и 4 је ${maxOfThreeNumbers(3, 5, 4)}.`);

// 2. задатак
// Написати функцију која израчунава цену пице по квадратном центиметру (уносе се цена и полупречник)

function calculatePizzaPrice(price, radius) {
  return (price / (radius ** 2 * Math.PI / 4)).toFixed(2);
}

console.log(`Цена пице по квадратном центиметру је ${calculatePizzaPrice(150, 32)} динара.`);
console.log(`Цена пице по квадратном центиметру је ${calculatePizzaPrice(180, 30)} динара.`);
console.log(`Цена пице по квадратном центиметру је ${calculatePizzaPrice(120, 30)} динара.`);

// 3. задатак
// Написати функцију која враћа цену најјефтиније пице од 3 унете (уносе се полупречници и цене), користећи две функције изнад (Написати функцију за минимум).

function minOfThreeNumbers(a, b, c) {
  if (a < b) {
    if (c < a) return c;
    else return a;
  } else {
    if (c < b) return c;
    else return b;
  }
  // return -maxOfThreeNumbers(-a, -b, -c);
}

function getCheapestPizza(p1, r1, p2, r2, p3, r3) {
  let firstPizzaPrice = calculatePizzaPrice(p1, r1);
  let secondPizzaPrice = calculatePizzaPrice(p2, r2);
  let thirdPizzaPrice = calculatePizzaPrice(p3, r3);

  // return 1 / maxOfThreeNumbers(1 / firstPizzaPrice, 1 / secondPizzaPrice, 1 / thirdPizzaPrice);
  return minOfThreeNumbers(firstPizzaPrice, secondPizzaPrice, thirdPizzaPrice);
}

console.log(`Цена најјефтиније пице је ${getCheapestPizza(150, 32, 180, 30, 120, 30)} динара по цм².`);