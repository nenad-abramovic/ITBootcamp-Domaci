{
  let a = 10;
  let b = 4;

  let sum = a + b;
  let difference = a - b;
  let product = a * b;
  let quotient = a / b;
  let modulo = a % b;
  let exp = Math.pow(a, b);
  // let exp = a ** b;

  let sumString = "Збир:".padEnd(19, " ");
  let differenceString = "Разлика:".padEnd(19, " ");
  let productString = "Производ:".padEnd(19, " ");
  let quotientString = "Количник:".padEnd(19, " ");
  let moduloString = "Остатак при дељењу:".padEnd(19, " ");
  let expString = "Степен:".padEnd(19, " ");

  console.log(`${sumString} ${a} + ${b} = ${sum}`);
  console.log(`${differenceString} ${a} - ${b} = ${difference}`);
  console.log(`${productString} ${a} * ${b} = ${product}`);
  console.log(`${quotientString} ${a} / ${b} = ${quotient}`);
  console.log(`${moduloString} ${a} % ${b} = ${modulo}`);
  console.log(`${expString} ${a} ^ ${b} = ${exp}`);
}
