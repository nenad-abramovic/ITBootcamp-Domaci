let pizzaPrice = 150;
let pizzaDiameter = 32;
let pizzaPricePerSquareCm = pizzaPrice / ((pizzaDiameter ** 2 * Math.PI) / 4);

console.log(`Цена пице по цм² је ${pizzaPricePerSquareCm.toFixed(2)} динара.`);
