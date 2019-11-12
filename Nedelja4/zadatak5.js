let sastojak1 = {
  name: 'Шећер',
  qunatity: 0.1,
  unitPrice: 55
};

let sastojak2 = {
  name: 'Вода',
  qunatity: 1,
  unitPrice: 70
};

let sastojak3 = {
  name: 'Маргарин',
  qunatity: 0.2,
  unitPrice: 270
};

let sastojak4 = {
  name: 'Чоколада',
  qunatity: 2,
  unitPrice: 100
};

let sastojak5 = {
  name: 'Ораси',
  qunatity: 0.1,
  unitPrice: 340
};

let sastojak6 = {
  name: 'Кекс',
  qunatity: 0.5,
  unitPrice: 180
};

let sastojak7 = {
  name: 'Млеко у праху',
  qunatity: 0.4,
  unitPrice: 120
};


let recept = {
  name: 'Киндер штангле',
  difficulty: 'Тежак',
  ingredients: [
    sastojak1,
    sastojak2,
    sastojak3,
    sastojak4,
    sastojak5,
    sastojak6,
    sastojak7
  ]
};

recept.cena = function () {
  let totalPrice = 0;
  this.ingredients.forEach(ingredient => ingredient.price = ingredient.qunatity * ingredient.unitPrice);
  this.ingredients.forEach(ingredient => totalPrice += ingredient.price);
  return totalPrice;
};

console.log(recept.cena());